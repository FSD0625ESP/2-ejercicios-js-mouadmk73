# Exercise 13 - Caesar cipher

Implementa el legendario cifrado Cesar: 

> En criptografía, un cifrado Cesar, también conocido como, el cifrado del Cesar o código del Cesar, es uno de los mas simples y mas conocidos métodos de encriptación. Es un tipo de cifrado de substitución en el cual cada letra del texto es reemplazada por otra letra que se encuentra 'desplazada' un numero fijo de posiciones dentro del alfabeto. Por ejemplo con un desplazamiento a la izquierda de 3 posiciones, D se reemplazaría con A, E sería B y así con todas. El método es llamado así por Julio Cesar, quien lo usaba en su correspondéncia privada.

Escribe una función que recibe un string a ser codificado y un valor de desplazamiento y devuelve el string codificado:

```javascript
caesar('A', 1) // simply shifts the letter by 1: returns 'B'
```

the cipher should retain capitalization:
```javascript
caesar('Hey', 5) // returns 'Mjd'
```

should _not_ shift punctuation:
```javascript
caesar('Hello, World!', 5) //returns 'Mjqqt, Btwqi!'
```

the shift should wrap around the alphabet:
```javascript
caesar('Z', 1) // returns 'A'
```

negative numbers should work as well:
```javascript
caesar('Mjqqt, Btwqi!', -5) // returns 'Hello, World!'
```
