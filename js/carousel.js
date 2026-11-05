// ===================================
// CARROSSEL AVANÇADO - AVALIAÇÕES
// ===================================

class AdvancedCarousel {
    constructor(options = {}) {
        this.carousel = document.getElementById(options.carouselId || 'avaliacoesCarousel');
        this.prevBtn = document.getElementById(options.prevBtnId || 'carouselPrev');
        this.nextBtn = document.getElementById(options.nextBtnId || 'carouselNext');
        this.indicatorsContainer = document.getElementById(options.indicatorsId || 'carouselIndicators');
        
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        this.totalItems = this.carousel.querySelectorAll('.avaliacao-card:not(.placeholder-avaliacao)').length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = options.autoPlayDelay || 5000;
        this.isAutoPlaying = options.autoPlay !== false;
        
        if (this.carousel) {
            this.init();
        }
    }
    
    init() {
        this.setupEventListeners();
        this.createIndicators();
        this.startAutoPlay();
        window.addEventListener('resize', () => this.handleResize());
    }
    
    setupEventListeners() {
        // Botões de navegação
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Touch/Swipe
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            this.pauseAutoPlay();
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.resumeAutoPlay();
        });
        
        const handleSwipe = () => {
            if (touchStartX - touchEndX > 50) {
                this.next();
            } else if (touchEndX - touchStartX > 50) {
                this.prev();
            }
        };
        
        this.handleSwipe = handleSwipe;
        
        // Pausar ao hovering
        this.carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.resumeAutoPlay());
        
        // Scroll listener para atualizar indicadores
        this.carousel.addEventListener('scroll', () => this.updateIndicators());
    }
    
    createIndicators() {
        if (!this.indicatorsContainer) return;
        
        this.indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
            indicator.setAttribute('aria-label', `Ir para avaliação ${i + 1}`);
            indicator.addEventListener('click', () => this.goTo(i));
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    getItemsPerView() {
        const width = window.innerWidth;
        if (width > 768) return 3;
        if (width > 480) return 2;
        return 1;
    }
    
    handleResize() {
        const newItemsPerView = this.getItemsPerView();
        if (newItemsPerView !== this.itemsPerView) {
            this.itemsPerView = newItemsPerView;
            this.scrollToIndex(this.currentIndex);
        }
    }
    
    next() {
        if (this.currentIndex < this.totalItems - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Loop
        }
        this.scrollToIndex(this.currentIndex);
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.totalItems - 1; // Loop
        }
        this.scrollToIndex(this.currentIndex);
    }
    
    goTo(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.totalItems - 1));
        this.scrollToIndex(this.currentIndex);
    }
    
    scrollToIndex(index) {
        const card = this.carousel.querySelector(`.avaliacao-card:nth-child(${index + 1})`);
        if (card) {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
        this.updateIndicators();
    }
    
    updateIndicators() {
        const indicators = this.indicatorsContainer.querySelectorAll('.carousel-indicator');
        
        // Detectar qual card está mais visível
        const cards = this.carousel.querySelectorAll('.avaliacao-card:not(.placeholder-avaliacao)');
        let maxVisibility = 0;
        let visibleIndex = 0;
        
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const carouselRect = this.carousel.getBoundingClientRect();
            
            const visibility = Math.min(
                rect.right,
                carouselRect.right
            ) - Math.max(
                rect.left,
                carouselRect.left
            );
            
            if (visibility > maxVisibility) {
                maxVisibility = visibility;
                visibleIndex = index;
            }
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === visibleIndex);
        });
        
        this.currentIndex = visibleIndex;
    }
    
    startAutoPlay() {
        if (!this.isAutoPlaying) return;
        
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, this.autoPlayDelay);
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resumeAutoPlay() {
        if (this.isAutoPlaying && !this.autoPlayInterval) {
            this.startAutoPlay();
        }
    }
    
    destroy() {
        this.pauseAutoPlay();
        if (this.prevBtn) this.prevBtn.removeEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.removeEventListener('click', () => this.next());
    }
}

// ===================================
// INICIALIZAR CARROSSEL
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    window.avaliacoesCarousel = new AdvancedCarousel({
        carouselId: 'avaliacoesCarousel',
        prevBtnId: 'carouselPrev',
        nextBtnId: 'carouselNext',
        indicatorsId: 'carouselIndicadores',
        autoPlay: false,
        autoPlayDelay: 6000
    });
});

// ===================================
// CAROUSEL GENÉRICO - Para possíveis outros carrosséis
// ===================================

class GenericCarousel {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.options = {
            itemsPerView: options.itemsPerView || 1,
            autoPlay: options.autoPlay !== false,
            autoPlayDelay: options.autoPlayDelay || 5000,
            speed: options.speed || 300,
            ...options
        };
        
        this.items = this.container.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        
        if (this.items.length) {
            this.init();
        }
    }
    
    init() {
        this.setupScroll();
        if (this.options.autoPlay) {
            this.startAutoPlay();
        }
    }
    
    setupScroll() {
        this.container.style.scrollBehavior = 'smooth';
    }
    
    navigate(direction) {
        this.currentIndex += direction;
        
        if (this.currentIndex >= this.items.length) {
            this.currentIndex = 0;
        } else if (this.currentIndex < 0) {
            this.currentIndex = this.items.length - 1;
        }
        
        this.items[this.currentIndex].scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.navigate(1);
        }, this.options.autoPlayDelay);
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}
