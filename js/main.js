// Load header and footer
document.addEventListener('DOMContentLoaded', function() {
    // First check if toolsData is available
    if (typeof toolsData === 'undefined') {
        console.error('Tools data is not loaded. Please check if tools-data.js is properly included.');
        return;
    }

    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Initialize Bootstrap components after header is loaded
            initializeBootstrapComponents();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Create tool card with enhanced animations
    function createToolCard(tool) {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3';
        col.setAttribute('data-aos', 'fade-up');
        col.setAttribute('data-aos-delay', Math.random() * 300);

        const card = document.createElement('div');
        card.className = 'tool-card card h-100';
        card.setAttribute('data-category', tool.category);
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center';

        const icon = document.createElement('div');
        icon.className = 'tool-icon mb-3';
        icon.innerHTML = `<i class="${tool.icon}"></i>`;

        const title = document.createElement('h3');
        title.className = 'card-title h5';
        title.textContent = tool.name;

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = tool.description;

        const link = document.createElement('a');
        link.href = tool.url;
        link.className = 'btn btn-primary mt-3';
        link.innerHTML = `<span>Use Tool</span> <i class="fas fa-arrow-right ms-2"></i>`;

        // Add hover effect listeners
        card.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1) translateY(-5px)';
            title.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) translateY(0)';
            title.style.transform = 'translateY(0)';
        });

        // Add click animation
        card.addEventListener('click', (e) => {
            if (e.target !== link) {
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            }
        });

        cardBody.appendChild(icon);
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        card.appendChild(cardBody);
        col.appendChild(card);

        // Add intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(card);

        return col;
    }

    // Initialize category-specific grids
    const categories = ['image', 'seo', 'developer', 'financial', 'converter', 'text', 'scientific'];
    categories.forEach(category => {
        const categoryTools = toolsData.filter(tool => tool.category === category);
        const categoryGrid = document.getElementById(`${category}Tools`);
        if (categoryGrid) {
            categoryTools.forEach(tool => {
                const toolCard = createToolCard(tool);
                categoryGrid.appendChild(toolCard);
            });
        }
    });

    // Initialize search functionality with animation
    const searchInput = document.getElementById('toolSearch');
    const toolsGrid = document.getElementById('toolsGrid');
    let searchTimeout;

    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = this.value.toLowerCase();
            toolsGrid.innerHTML = '';

            const filteredTools = toolsData.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) || 
                tool.description.toLowerCase().includes(searchTerm)
            );

            if (filteredTools.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'col-12 text-center py-5';
                noResults.setAttribute('data-aos', 'fade-up');
                noResults.innerHTML = `
                    <i class="fas fa-search fa-3x text-muted mb-3"></i>
                    <h3>No tools found</h3>
                    <p class="text-muted">Try different keywords or browse categories</p>
                `;
                toolsGrid.appendChild(noResults);
            } else {
                filteredTools.forEach(tool => {
                    const toolCard = createToolCard(tool);
                    toolsGrid.appendChild(toolCard);
                });
            }

            // Refresh AOS animations
            AOS.refresh();
        }, 300);
    });

    // Initialize all tools grid
    toolsData.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });

    // Add scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.className = 'btn btn-primary scroll-to-top';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});

// Initialize Bootstrap components
function initializeBootstrapComponents() {
    // Initialize dropdowns
    const dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach(dropdown => {
        new bootstrap.Dropdown(dropdown);
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('toolSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeTab = document.querySelector('.tab-pane.active');
        const toolCards = activeTab.querySelectorAll('.tool-card');

        toolCards.forEach(card => {
            const toolName = card.querySelector('.card-title').textContent.toLowerCase();
            const toolDescription = card.querySelector('.card-text').textContent.toLowerCase();
            const isVisible = toolName.includes(searchTerm) || toolDescription.includes(searchTerm);
            
            card.closest('.col-sm-6').style.display = isVisible ? 'block' : 'none';
        });
    });
}

// Add category transition effects
function initializeCategoryTabs() {
    const tabElements = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabElements.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(e) {
            const activeTab = document.querySelector('.tab-pane.active');
            const toolCards = activeTab.querySelectorAll('.tool-card');
            
            toolCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });

            // Update URL hash for direct linking
            const category = e.target.getAttribute('data-bs-target').replace('#', '');
            window.location.hash = category;
        });
    });

    // Check for hash in URL and activate corresponding tab
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const tab = document.querySelector(`[data-bs-target="#${hash}"]`);
        if (tab) {
            new bootstrap.Tab(tab).show();
        }
    }
}

// Handle category filtering
document.addEventListener('click', function(e) {
    if (!e.target.matches('[data-bs-toggle="tab"]')) return;
    
    const category = e.target.getAttribute('data-bs-target').replace('#', '');
    const toolCards = document.querySelectorAll('.tool-card');

    toolCards.forEach(card => {
        const col = card.closest('.col-sm-6');
        if (category === 'all') {
            col.style.display = 'block';
            return;
        }

        const toolData = toolsData.find(tool => 
            tool.name === card.querySelector('.card-title').textContent
        );
        
        col.style.display = toolData.category === category ? 'block' : 'none';
    });
}); 