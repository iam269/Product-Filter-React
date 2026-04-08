# Product Filter React App 🛍️🔍

Welcome to the **Product Filter React App**! This is a sophisticated, interactive web application built with React and Vite that empowers users to explore and filter a diverse collection of products with unparalleled ease and efficiency. Whether you're hunting for the perfect gadget, stylish apparel, or home essentials, our app delivers a seamless browsing experience through advanced filtering capabilities and real-time search functionality.

## 🌟 Key Features

- **🔍 Intelligent Search**: Instantly find products by name with our powerful, case-insensitive search engine that updates results in real-time as you type.
- **🏷️ Category Filtering**: Narrow down your options by selecting specific product categories, from electronics to fashion and beyond.
- **💰 Price Range Control**: Set minimum and maximum price thresholds to discover items within your budget, ensuring you never miss a great deal.
- **📱 Responsive Design**: Enjoy a flawless experience across all devices – from desktop computers to smartphones and tablets.
- **⚡ Lightning-Fast Performance**: Powered by Vite for rapid development and blazing-fast hot module replacement (HMR).
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations and professional styling.

## 🚀 Live Demo

Experience the app in action: [https://itsiamdev.github.io/Product-Filter-React/](https://itsiamdev.github.io/Product-Filter-React/)

## 🛠️ Technology Stack

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for fast development
- **ESLint** - Code linting for maintaining code quality
- **CSS Modules** - Scoped styling for component isolation

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/iam269/Product-Filter-React.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Product-Filter-React
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173/Product-Filter-React/`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── FilterBar.jsx      # Search and filter controls
│   ├── FilterBar.css      # Styling for filter bar
│   ├── ProductList.jsx    # Product grid display
│   ├── ProductList.css    # Styling for product list
│   └── ProductItem.jsx    # Individual product card
├── data/
│   └── products.js        # Product data and categories
├── App.jsx                # Main application component
└── main.jsx               # Application entry point
```

## 🎯 How It Works

The app leverages React's state management to dynamically filter products based on user input. The filtering logic combines multiple criteria:

1. **Search Term**: Filters products whose names contain the search query
2. **Category**: Matches exact category selections
3. **Price Range**: Applies numerical comparisons for min/max prices

All filters work together seamlessly, updating the product list instantly as users interact with the interface.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to help improve this project.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Vite. Happy shopping! 🛒✨
