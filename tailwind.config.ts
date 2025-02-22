import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			'float-up': 'floatUp 5s ease-in-out infinite',
			'float-up-slow': 'floatUp 10s ease-in-out infinite',
			'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'bounce-slow': 'bounce 3s infinite',
			'rotate-slow': 'rotate 6s linear infinite',
			'fade-in-down': 'fadeInDown 1s ease-out',
			'fade-in-up': 'fadeInUp 1s ease-out',
		  },
		  keyframes: {
			floatUp: {
			  '0%': { transform: 'translateY(0) translateX(0)', opacity: '0.5' },
			  '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '1' },
			  '100%': { transform: 'translateY(0) translateX(0)', opacity: '0.5' },
			},
			fadeInDown: {
			  '0%': { opacity: '0', transform: 'translateY(-20px)' },
			  '100%': { opacity:' 1', transform: 'translateY(0)' },
			},
			fadeInUp: {
			  '0%': { opacity: '0', transform: 'translateY(20px)' },
			  '100%': { opacity: '1', transform: 'translateY(0)' },
			},
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily:{
			montserrat:'var(--font-montserrat)',
		}				  		
  },
},
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
