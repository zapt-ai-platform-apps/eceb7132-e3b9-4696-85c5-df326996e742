export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5', // Indigo Light
          DEFAULT: '#3730A3', // Indigo Default
          dark: '#312E81', // Indigo Dark
        },
        secondary: {
          light: '#10B981', // Emerald Light
          DEFAULT: '#059669', // Emerald Default
          dark: '#047857', // Emerald Dark
        },
        neutral: {
          light: '#F3F4F6', // Light Gray
          DEFAULT: '#D1D5DB', // Default Gray
          dark: '#4B5563', // Dark Gray
        },
        feedback: {
          success: '#22C55E', // Green
          error: '#EF4444',   // Red
          warning: '#F59E0B', // Yellow
          info: '#3B82F6',    // Blue
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
        '40': '10rem',     // 160px
        '48': '12rem',     // 192px
        '56': '14rem',     // 224px
        '64': '16rem',     // 256px
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
      },
      fontWeight: {
        'hairline': '100',
        'thin': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      letterSpacing: {
        'tight': '-0.05em',
        'normal': '0em',
        'wide': '0.05em',
      },
    },
  },
  plugins: [],
};