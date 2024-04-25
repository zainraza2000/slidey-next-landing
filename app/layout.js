import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Slidey.io",
  description: "Designing Decks, Pitch Perfectly!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="htNWFhC0OCNkink3mVGJFmCIO0wEzeRov94afl4JitU"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "kk6dn0ugum"); `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* <Script
          id="tawk"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65c626538d261e1b5f5e519f/1hn0gae73';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
            `,
          }}
        /> */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            document.body.addEventListener('contextmenu', function(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
    }
});
            `,
          }}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            !function(w,d){function e(e,n){w.ServiceBell.q=w.ServiceBell.q||[],w.ServiceBell.q.push([e,n])}if(!w.ServiceBell){var i=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),c=1;c<i;c++)r[c-1]=arguments[c];e(n,r)};["init","identify","dial","alert","bookMeeting","hide","show","expand","collapse","connect","disconnect"].forEach((function(r){i[r]=function(){for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];e(n,r)}})),w.ServiceBell=i}var s=d.createElement("script");s.id="service-bell-script",s.src="https://cdn.servicebell.com/main.js",s.async=1;var r=d.getElementsByTagName("script")[0];r.parentNode.insertBefore(s,r)}(window,document);
  ServiceBell("init", "5c049e39eec940bc88ef817d0e654a0b", { mode: "iframe-jit" });
            `,
          }}
        />
      </body>
    </html>
  );
}
