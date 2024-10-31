/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuHamburguer = document.querySelector('.menu-hamburguer');

    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    menuHamburguer.classList.toggle('ativo');
}