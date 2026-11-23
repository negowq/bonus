<?php
/**
 * Abre o link no navegador nativo do celular quando acessado de dentro do TikTok.
 * Suba este arquivo como index.php na pasta public_html (ou numa subpasta) da Hostinger.
 */

// ================== CONFIGURAÇÃO ==================
$DESTINO = 'https://bonusquest.vercel.app/bonusttk/';
$REPASSAR_PARAMETROS = true;   // repassa os parâmetros da URL (utm etc.) para o destino
// ==================================================

$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';

// Detecta o navegador interno do TikTok
$noTikTok  = (bool) preg_match('/musical_ly|BytedanceWebview|TikTok|trill|ByteLocale|aweme/i', $ua);
$ehAndroid = (bool) preg_match('/Android/i', $ua);
$ehIOS     = (bool) preg_match('/iPhone|iPad|iPod/i', $ua);

$destino = $DESTINO;
if ($REPASSAR_PARAMETROS && !empty($_GET)) {
    $destino .= (strpos($destino, '?') === false ? '?' : '&') . http_build_query($_GET);
}

header('Cache-Control: no-store, no-cache, must-revalidate');

// Fora do TikTok (ou desktop) -> redireciona direto
if (!$noTikTok || (!$ehAndroid && !$ehIOS)) {
    header('Location: ' . $destino, true, 302);
    exit;
}

// Dentro do TikTok no celular -> tenta abrir o navegador nativo
$p = parse_url($destino);
$hostPath = $p['host'] . ($p['path'] ?? '/') . (isset($p['query']) ? '?' . $p['query'] : '');

// ---- Tentativas em sequência ----
// Android 1: intent genérico (navegador padrão do aparelho)
$androidPadrao = 'intent://' . $hostPath . '#Intent;scheme=https;action=android.intent.action.VIEW;'
               . 'category=android.intent.category.BROWSABLE;end';
// Android 2: Chrome (vem instalado em quase todo Android) com fallback
$androidChrome = 'intent://' . $hostPath . '#Intent;scheme=https;package=com.android.chrome;'
               . 'S.browser_fallback_url=' . rawurlencode($destino) . ';end';
// Android 3: Samsung Internet
$androidSamsung = 'intent://' . $hostPath . '#Intent;scheme=https;package=com.sec.android.app.sbrowser;end';

// iOS 17+: Safari
$iosSafari = 'x-safari-https://' . $hostPath;

$tentativas = $ehAndroid ? [$androidPadrao, $androidChrome, $androidSamsung] : [$iosSafari];
$linkBotao  = $tentativas[0];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Abrindo...</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
       font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#f5f5f7;color:#111;padding:24px}
  .box{max-width:380px;width:100%;text-align:center}
  .spin{width:40px;height:40px;border:4px solid #ddd;border-top-color:#111;border-radius:50%;
        margin:0 auto 20px;animation:g 1s linear infinite}
  @keyframes g{to{transform:rotate(360deg)}}
  h1{font-size:20px;margin:0 0 8px}
  p{font-size:15px;color:#555;line-height:1.45;margin:0 0 20px}
  .btn{display:block;width:100%;border:0;background:#111;color:#fff;text-decoration:none;padding:16px;border-radius:12px;
       font-size:16px;font-weight:600;margin-bottom:12px;cursor:pointer}
  .btn2{background:#fff;color:#111;border:2px solid #111}
  /* Tela-guia: seta apontando para o menu ⋯ do TikTok */
  #guia{display:none;position:fixed;inset:0;background:rgba(0,0,0,.88);color:#fff;z-index:9;padding:24px;text-align:left}
  #guia .seta{position:absolute;top:6px;right:18px;font-size:56px;line-height:1;animation:b 1s ease-in-out infinite}
  @keyframes b{50%{transform:translateY(-8px)}}
  #guia .txt{margin-top:90px;font-size:20px;line-height:1.5}
  #guia .txt b{color:#25F4EE}
  #guia ol{padding-left:22px}
  #guia li{margin-bottom:14px}
</style>
</head>
<body>
<div class="box">
  <div class="spin"></div>
  <h1>Abrindo no seu navegador…</h1>
  <p>Se não abrir sozinho, toque no botão abaixo.</p>
  <a class="btn" id="abrir" href="<?= htmlspecialchars($linkBotao, ENT_QUOTES) ?>">Abrir no navegador</a>
  <button class="btn btn2" id="verGuia" type="button">Não abriu? Veja como</button>
</div>

<div id="guia">
  <div class="seta">↗</div>
  <div class="txt">
    <ol>
      <li>Toque nos <b>⋯</b> no canto superior direito</li>
      <li>Escolha <b>“Abrir no navegador”</b><?= $ehIOS ? ' (ou “Abrir no Safari”)' : '' ?></li>
    </ol>
  </div>
</div>

<script>
(function () {
  var tentativas = <?= json_encode($tentativas) ?>;
  var i = 0, saiu = false;

  // Se a página perder o foco/ficar oculta, o navegador externo abriu
  function marcarSaida(){ if (document.hidden) saiu = true; }
  document.addEventListener('visibilitychange', marcarSaida);
  window.addEventListener('pagehide', function(){ saiu = true; });
  window.addEventListener('blur', function(){ saiu = true; });

  function mostrarGuia(){ document.getElementById('guia').style.display = 'block'; }

  function proxima(){
    if (saiu) return;
    if (i >= tentativas.length) { mostrarGuia(); return; }
    window.location.href = tentativas[i++];
    setTimeout(proxima, 1500);
  }

  setTimeout(proxima, 250);

  // Botão: o toque do usuário libera aberturas que o app bloqueia no automático
  document.getElementById('abrir').addEventListener('click', function(e){
    e.preventDefault(); saiu = false; i = 0; proxima();
  });
  document.getElementById('verGuia').addEventListener('click', mostrarGuia);
  document.getElementById('guia').addEventListener('click', function(){ this.style.display='none'; });
})();
</script>
</body>
</html>
