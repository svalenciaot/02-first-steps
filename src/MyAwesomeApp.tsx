import type { CSSProperties } from "react";

const firstName = 'Santiago';
const lastName = 'Valencia';
const favoriteGames = ['Halo', 'Mario Kart', 'AOE'];
const isActive = true;

const address = {
    zipCode: 123,
    country: 'Canadá',
}

const myStyles: CSSProperties = {
    backgroundColor: isActive ? 'grey' : 'red',
    borderRadius: 10,
    padding: 10
}

export function Nombre() {
    return (
        <>
            <h1 style={myStyles}>{firstName}</h1>
            <h3>{lastName}</h3>
            <h3>{favoriteGames.join(', ')}</h3>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            <p style={myStyles}>
                {JSON.stringify(address)}
            </p>
        </>
    )
}