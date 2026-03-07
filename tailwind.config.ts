import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			// Somali Cultural Palette
  			sand: {
  				50: '#FFF8F1',
  				100: '#F3E6D0',
  				200: '#E8D4AF',
  				300: '#D9A441',
  				400: '#B78B3A',
  				500: '#956C2E',
  				600: '#734E22',
  				700: '#513616',
  			},
  			somali: {
  				gold: '#D9A441',
  				earth: '#956C2E',
  				sky: '#87CEEB',
  				sea: '#006994',
  				flag: '#4189DD',
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-20px)' }
  			},
  			'float-slow': {
  				'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
  				'50%': { transform: 'translateY(-10px) rotate(2deg)' }
  			},
  			'pulse-glow': {
  				'0%, 100%': { boxShadow: '0 0 20px rgba(217, 164, 65, 0.3)' },
  				'50%': { boxShadow: '0 0 40px rgba(217, 164, 65, 0.6)' }
  			},
  			'gradient-x': {
  				'0%, 100%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' }
  			},
  			'gradient-y': {
  				'0%, 100%': { backgroundPosition: '50% 0%' },
  				'50%': { backgroundPosition: '50% 100%' }
  			},
  			'shimmer': {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' }
  			},
  			'slide-up': {
  				'0%': { transform: 'translateY(100px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' }
  			},
  			'slide-down': {
  				'0%': { transform: 'translateY(-100px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' }
  			},
  			'slide-left': {
  				'0%': { transform: 'translateX(100px)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' }
  			},
  			'slide-right': {
  				'0%': { transform: 'translateX(-100px)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' }
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			'scale-in': {
  				'0%': { transform: 'scale(0.8)', opacity: '0' },
  				'100%': { transform: 'scale(1)', opacity: '1' }
  			},
  			'rotate-3d': {
  				'0%': { transform: 'perspective(1000px) rotateY(0deg)' },
  				'100%': { transform: 'perspective(1000px) rotateY(360deg)' }
  			},
  			'tilt': {
  				'0%, 100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
  				'25%': { transform: 'perspective(1000px) rotateX(2deg) rotateY(2deg)' },
  				'75%': { transform: 'perspective(1000px) rotateX(-2deg) rotateY(-2deg)' }
  			},
  			'bounce-subtle': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-5px)' }
  			},
  			'wiggle': {
  				'0%, 100%': { transform: 'rotate(-3deg)' },
  				'50%': { transform: 'rotate(3deg)' }
  			},
  			'morph': {
  				'0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
  				'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
  			},
  			'spin-slow': {
  				'0%': { transform: 'rotate(0deg)' },
  				'100%': { transform: 'rotate(360deg)' }
  			},
  			'ping-slow': {
  				'75%, 100%': { transform: 'scale(1.5)', opacity: '0' }
  			},
  			'text-reveal': {
  				'0%': { clipPath: 'inset(0 100% 0 0)' },
  				'100%': { clipPath: 'inset(0 0 0 0)' }
  			},
  			'line-grow': {
  				'0%': { width: '0%' },
  				'100%': { width: '100%' }
  			},
  			'counter': {
  				'0%': { '--num': '0' },
  				'100%': { '--num': 'var(--target)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float': 'float 6s ease-in-out infinite',
  			'float-slow': 'float-slow 8s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
  			'gradient-x': 'gradient-x 15s ease infinite',
  			'gradient-y': 'gradient-y 15s ease infinite',
  			'shimmer': 'shimmer 2s linear infinite',
  			'slide-up': 'slide-up 0.6s ease-out',
  			'slide-down': 'slide-down 0.6s ease-out',
  			'slide-left': 'slide-left 0.6s ease-out',
  			'slide-right': 'slide-right 0.6s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'scale-in': 'scale-in 0.5s ease-out',
  			'rotate-3d': 'rotate-3d 20s linear infinite',
  			'tilt': 'tilt 10s ease-in-out infinite',
  			'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
  			'wiggle': 'wiggle 1s ease-in-out infinite',
  			'morph': 'morph 8s ease-in-out infinite',
  			'spin-slow': 'spin-slow 20s linear infinite',
  			'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
  			'text-reveal': 'text-reveal 1s ease-out forwards',
  			'line-grow': 'line-grow 1s ease-out forwards',
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'mesh-gradient': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)',
  		},
  		boxShadow: {
  			'3d': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
  			'3d-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
  			'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
  			'gold': '0 4px 14px 0 rgba(217, 164, 65, 0.39)',
  			'gold-lg': '0 10px 40px -10px rgba(217, 164, 65, 0.5)',
  		},
  		transitionTimingFunction: {
  			'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  			'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
