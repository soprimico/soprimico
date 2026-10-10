// js/main.js

const siteContent = [
    // Tutoriales OSINT
    { title: "Maltego - Análisis de Vínculos", url: "tutorials.html", category: "OSINT", tag: "Top" },
    { title: "theHarvester - Recolección de Emails", url: "tutorials.html", category: "OSINT", tag: "Popular" },
    { title: "Sherlock - Buscar Usuarios", url: "tutorials.html", category: "OSINT", tag: "Nuevo" },
    { title: "Recon-ng - Framework OSINT", url: "tutorials.html", category: "OSINT", tag: "" },
    
    // Tutoriales Pentesting
    { title: "Nmap - Escaneo de Redes", url: "tutorials.html", category: "Pentesting", tag: "Esencial" },
    { title: "Metasploit - Explotación", url: "tutorials.html", category: "Pentesting", tag: "Top" },
    { title: "Burp Suite - Web Hacking", url: "tutorials.html", category: "Pentesting", tag: "Popular" },
    { title: "Wireshark - Análisis de Tráfico", url: "tutorials.html", category: "Pentesting", tag: "" },
    { title: "Hydra - Fuerza Bruta", url: "tutorials.html", category: "Pentesting", tag: "Nuevo" },
    { title: "SQLmap - Inyección SQL", url: "tutorials.html", category: "Pentesting", tag: "Top" },

    // Productos Shop
    { title: "Script Automatizado Nmap + Nikto", url: "shop.html", category: "Script", tag: "Ventas" },
    { title: "Wordlist Personalizada España", url: "shop.html", category: "Recurso", tag: "Top" },
    { title: "Script de Reconocimiento OSINT", url: "shop.html", category: "Script", tag: "Nuevo" },

    // Clases
    { title: "Curso Gratuito: Introducción a Kali", url: "classes.html", category: "Clase", tag: "Gratis" },
    { title: "Plan Pro - Pentesting Avanzado", url: "classes.html", category: "Clase", tag: "Recomendado" },
    { title: "Plan Elite - Mentoría 1 a 1", url: "classes.html", category: "Clase", tag: "Premium" },

    // Ayuda
    { title: "¿Cómo instalar Kali Linux?", url: "help.html", category: "Ayuda", tag: "" },
    { title: "Solución de errores comunes", url: "help.html", category: "Ayuda", tag: "" }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            resultsContainer.innerHTML = '';

            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }

            const filtered = siteContent.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.category.toLowerCase().includes(query)
            );

            if (filtered.length > 0) {
                resultsContainer.style.display = 'block';
                filtered.forEach(item => {
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <div>
                            <strong style="color: #fff;">${item.title}</strong>
                            <span style="font-size: 0.8em; color: #666; margin-left: 8px;">${item.category}</span>
                        </div>
                        ${item.tag ? `<span style="font-size: 0.7rem; background: #333; padding: 2px 8px; border-radius: 4px; color: #fff;">${item.tag}</span>` : ''}
                    `;
                    div.onclick = () => {
                        window.location.href = item.url;
                    };
                    resultsContainer.appendChild(div);
                });
            } else {
                resultsContainer.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });
    }
});