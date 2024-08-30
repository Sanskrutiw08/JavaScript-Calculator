# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Here's a sample README file for your calculator project:

---

# **React Calculator**

This is a simple calculator application built using React. The calculator performs basic arithmetic operations and handles chained operations with proper order of precedence.

## **Features**

- **Basic Operations**: Supports addition, subtraction, multiplication, and division.
- **Chained Operations**: Handles multiple operations in a sequence, following mathematical order of operations.
- **Clear Functionality**: The calculator can be reset to its initial state.
- **Decimal Support**: Allows for operations involving decimal numbers.
- **Error Handling**: Displays "Error" for invalid calculations (e.g., dividing by zero).

## **Project Structure**

- `src/`
  - `components/`
    - `Button.js` - The button component that represents each button on the calculator.
    - `Display.js` - The display component where the current value or result is shown.
  - `App.js` - The main component that renders the calculator.
  - `index.js` - Entry point of the application.

## **How to Run the Project**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/react-calculator.git
   cd react-calculator
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

   This will start the development server and open the application in your default browser at `http://localhost:3000`.

## **Code Explanation**

### `App.js`

- Manages the state of the calculator using `useState`.
- Handles button clicks to update the display or perform calculations.
- Uses the `eval` function to compute the result when `=` is clicked.

### `Button.js`

- A reusable button component that triggers the `onClick` function passed as a prop.

### `Display.js`

- A simple component that renders the current value or result in the calculator display.

### **Using the `map` Function**

- The `map` function is used in `App.js` to dynamically generate buttons based on an array of values, making the code more concise and maintainable.

## **How to Use**

1. Click the buttons to enter numbers and operators.
2. Press `=` to compute the result.
3. Press `C` to clear the display and reset the calculator.

## **Example Usage**

- **Basic Calculation**: Enter `2 + 3`, then press `=` to see the result `5`.
- **Chained Operations**: Enter `5 + 2 * 3`, then press `=` to see the result `11`.
- **Decimal Operations**: Enter `5.5 + 2.3`, then press `=` to see the result `7.8`.



---
# JavaScript-Calculator
