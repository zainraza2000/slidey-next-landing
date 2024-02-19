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

        <Script
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
        />
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
      </body>
    </html>
  );
}
