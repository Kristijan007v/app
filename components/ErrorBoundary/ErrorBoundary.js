import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    function refreshPage() {
      window.location.reload(false);
    }
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex items-center justify-center space-x-2 bg-red-500 p-4 text-center font-semibold text-white">
          <p>
            There was an error in loading {this.props.moduleName} module. Please
            try to refresh the page and try again.
          </p>
          <button
            className="rounded-md bg-white pt-2 pb-2 pr-4 pl-4 text-black"
            onClick={refreshPage}
          >
            Refresh
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
