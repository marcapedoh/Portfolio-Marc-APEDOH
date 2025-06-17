// Animation des compteurs
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target + (counter.getAttribute('data-target').includes('+') ? '+' : '');
        }
    });
};

// Déclenche l'animation lorsque la section est visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('section:nth-of-type(2)');
if (statsSection) {
    observer.observe(statsSection);
}

// Animation au scroll
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.project-card');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(card => scrollObserver.observe(card));
projectCards.forEach(card => scrollObserver.observe(card));

// Effet de particules
function createParticles() {
    const container = document.getElementById('particles-js');
    if (!container) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Position aléatoire
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        // Taille aléatoire
        const size = Math.random() * 5 + 1;

        // Opacité aléatoire
        const opacity = Math.random() * 0.5 + 0.1;

        // Durée d'animation aléatoire
        const duration = Math.random() * 20 + 10;

        // Délai aléatoire
        const delay = Math.random() * 5;

        // Couleur aléatoire
        const colors = ['rgba(124, 58, 237, 0.5)', 'rgba(59, 130, 246, 0.5)', 'rgba(16, 185, 129, 0.5)', 'rgba(245, 158, 11, 0.5)'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        particle.style.background = color;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        container.appendChild(particle);
    }
}

createParticles();

// Curseur personnalisé
const cursor = document.querySelector('.cursor-trail');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Effet sur les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'rgba(124, 58, 237, 0.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'rgba(124, 58, 237, 0.5)';
        });
    });
}

// Animation de la grille GitHub (simulation)
// En production, vous pourriez utiliser l'API GitHub pour obtenir les vraies données
function simulateGitHubGrid() {
    const gridContainer = document.querySelector('.grid-mask');
    if (!gridContainer) return;

    // Créer une simulation de grille GitHub
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-52 gap-1';

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 52; j++) {
            const cell = document.createElement('div');
            cell.className = 'w-3 h-3 rounded-sm';

            // Niveau d'activité aléatoire (pour la démo)
            const activityLevel = Math.floor(Math.random() * 4);

            switch (activityLevel) {
                case 0:
                    cell.className += ' bg-gray-100 dark:bg-gray-800';
                    break;
                case 1:
                    cell.className += ' bg-green-300 dark:bg-green-900';
                    break;
                case 2:
                    cell.className += ' bg-green-500 dark:bg-green-700';
                    break;
                case 3:
                    cell.className += ' bg-green-700 dark:bg-green-500';
                    break;
            }

            grid.appendChild(cell);
        }
    }

    gridContainer.innerHTML = '';
    gridContainer.appendChild(grid);
}

simulateGitHubGrid();

document.addEventListener('DOMContentLoaded', async function () {
    // Categories de technologies
    const techCategories = {

        'angular': {
            name: 'Angular',
            keywords: ['angular', 'typescript'],
            icon: 'fab fa-angular',
            color: 'from-red-500 to-pink-500',
            repos: []
        },

        'vue': {
            name: 'Vue.js',
            keywords: ['vue'],
            icon: 'fab fa-vuejs',
            color: 'from-green-500 to-emerald-400',
            repos: []
        },
        'typescript': {
            name: 'TypeScript',
            keywords: ['typescript', 'ts'],
            icon: 'fas fa-code',
            color: 'from-blue-600 to-blue-400',
            repos: []
        },
        'tailwind-css': {
            name: 'Tailwind/CSS',
            keywords: ['tailwind', 'css'],
            icon: 'fab fa-css3-alt',
            color: 'from-teal-500 to-blue-500',
            repos: []
        },
        'java': {
            name: 'Java',
            keywords: ['java'],
            icon: 'fab fa-java',
            color: 'from-red-600 to-orange-500',
            repos: []
        },
        'python': {
            name: 'Python',
            keywords: ['python'],
            icon: 'fab fa-python',
            color: 'from-blue-500 to-yellow-500',
            repos: []
        },
        'dart': {
            name: 'Dart',
            keywords: ['dart'],
            icon: 'fas fa-code',
            color: 'from-blue-400 to-teal-500',
            repos: []
        },
        'r-python': {
            name: 'R/Python',
            keywords: ['r', 'python'],
            icon: 'fas fa-chart-line',
            color: 'from-green-500 to-teal-500',
            repos: []
        },
        'flutter-maui': {
            name: 'Flutter/.NET MAUI',
            keywords: ['flutter', 'maui', '.net maui'],
            icon: 'fas fa-mobile-alt',
            color: 'from-orange-500 to-red-500',
            repos: []
        }
    };

    try {
        const response = await fetch('https://api.github.com/users/marcapedoh/repos?per_page=100', {
            headers: {
                Authorization: `Bearer YOUR_SECRET_KEY`
            }
        });
        if (!response.ok) throw new Error('Erreur de chargement des repositories');
        const repos = await response.json();

        for (const repo of repos) {
            if (repo.fork || repo.size === 0) continue;

            // Récupération des languages
            const langResponse = await fetch(repo.languages_url, {
                headers: {
                    Authorization: "Bearer YOUR_SECRET_KEY"
                }
            });
            const languages = await langResponse.json();

            // Langage dominant
            const dominant = Object.entries(languages).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Other';
            const techs = Object.keys(languages).filter(tech => languages[tech] > 0);

            // On classe le projet dans la catégorie correspondante
            for (const [categoryId, category] of Object.entries(techCategories)) {
                if (techs.some(tech =>
                    category.keywords.some(kw => tech.toLowerCase().includes(kw))
                )) {
                    category.repos.push({
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        html_url: repo.html_url,
                        stargazers_count: repo.stargazers_count,
                        forks_count: repo.forks_count,
                        languages_url: repo.languages_url,
                        created_at: repo.created_at,
                        updated_at: repo.updated_at,
                        dominant,
                        techs
                    });
                    break;
                }
            }
        }

        // Afficher les projets
        displayRepositoriesByCategory(techCategories);
    } catch (error) {
        console.error('Erreur :', error);
        document.getElementById('projects-container').innerHTML = `
            <div class="text-center py-12 text-gray-600 dark:text-gray-400">
                <i class="fas fa-exclamation-triangle text-2xl mb-4"></i>
                <p>Impossible de charger les projets GitHub. Veuillez réessayer plus tard.</p>
            </div>`;
    }

    // Fonction d'affichage
    function displayRepositoriesByCategory(categories) {
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = '';

        for (const [categoryId, category] of Object.entries(categories)) {
            if (category.repos.length === 0) continue;

            // Section par catégorie
            const categorySection = document.createElement('div');
            categorySection.className = 'mb-12';
            categorySection.innerHTML = `
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    <i class="${category.icon} mr-2"></i> Projets ${category.name}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="${categoryId}-projects">
                </div>`;
            projectsContainer.appendChild(categorySection);

            // Ajouter les projets
            const categoryProjectsContainer = document.getElementById(`${categoryId}-projects`);
            category.repos.forEach((repo, index) => {
                const projectCard = createProjectCard(repo, category, index);
                categoryProjectsContainer.appendChild(projectCard);
            });
        }

        if (projectsContainer.children.length === 0) {
            projectsContainer.innerHTML = `
                <div class="text-center py-12 text-gray-600 dark:text-gray-400">
                    <i class="fas fa-folder-open text-2xl mb-4"></i>
                    <p>Aucun projet trouvé dans les catégories spécifiées.</p>
                </div>`;
        }
    }

    // Création de la carte d'un projet
    function createProjectCard(repo, category, index) {
        const badges = repo.techs?.map(tech =>
            `<span class="px-2 py-1 mr-1 mb-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                ${tech}
             </span>`).join('') || '';

        const projectCard = document.createElement('div');
        projectCard.className = `project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn delay-${(index % 3 + 1) * 100}`;

        projectCard.innerHTML = `
            <div class="h-48 bg-gradient-to-r ${category.color} flex items-center justify-center">
                <i class="${category.icon} text-white text-5xl"></i>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">${repo.name}</h3>
                    <div class="flex space-x-2">
                        <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                            ${repo.dominant}
                        </span>
                    </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mt-3 line-clamp-2">
                    ${repo.description || 'Projet sans description'}
                </p>
                <div class="mt-4">
                    ${badges}
                </div>
                <div class="mt-4 flex justify-between items-center">
                    <div class="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <i class="far fa-star mr-1"></i>
                        <span>${repo.stargazers_count}</span>
                    </div>
                    <a href="${repo.html_url}" 
                       class="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline">
                        Voir le projet →
                    </a>
                </div>
            </div>`;

        return projectCard;
    }
});