import type React from "react";
import { useEffect, useState } from "react";
import { BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer } from "recharts";

const BarGrafica: React.FC = () => {
    const [productos, setProductos]= useState([])
    useEffect(() => {
        llamarProductos()
    }, [])
    const llamarProductos = async () => {
        try {
            const respuesta = await fetch("https://fakestoreapi.com/products")
            const data = await respuesta.json()
            setProductos(data)
        } catch(e){
            alert(e)
    }   
}
    return (
        <div>
            <h2> Ejemplo de Grafico de Barras</h2>
            <ResponsiveContainer>
                <BarChart data={productos}>
                    <CartesianGrid strokeDasharray="3 3">
                        <XAxis dataKey="title" hide={true}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Bar dataKey="price" fill="blue"></Bar>
                    </CartesianGrid>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarGrafica;