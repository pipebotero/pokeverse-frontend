import React, { Component } from "react";

type Props = {
    children: any
};

type State = {
    hasError: boolean
};

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    // También puedes registrar el error en un servicio de reporte de errores
    // componentDidCatch(error, errorInfo) {
    //     logErrorToMyService(error, errorInfo);
    // }
    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
