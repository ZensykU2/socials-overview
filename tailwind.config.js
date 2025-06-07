module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,html}',
  ],
  safelist: [
    'border-red-500', 'text-red-400', 'hover:bg-red-500', 'hover:text-white',
    'border-blue-500', 'text-blue-400', 'hover:bg-blue-500', 'hover:text-white',
    'border-pink-500', 'text-pink-400', 'hover:bg-pink-500', 'hover:text-white',
    'border-purple-500', 'text-purple-400', 'hover:bg-purple-500', 'hover:text-white',
    'border-gray-500', 'text-gray-400', 'hover:bg-gray-500', 'hover:text-white',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
      },
    },
  },
  plugins: [],
}
