// Exemplo de integração do Pixel do Facebook
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SUA_ID_DO_PIXEL_AQUI'); 
fbq('track', 'PageView');

// Evento de compra da apostila
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        fbq('track', 'Purchase', {
            value: this.innerText.includes('Pacote Completo') ? 199.90 : 49.90,
            currency: 'BRL'
        });
    });
});
