import './styles.css';

const helloWorld = document.createElement('h1');
helloWorld.textContent = 'Hello, world!';
helloWorld.className = 'hello-world'
document.body.appendChild(helloWorld);