import cars from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const catalogGrid = document.getElementById('catalog-grid');
    const modalOverlay = document.getElementById('specs-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-modal');

    // Render Cards
    cars.forEach(car => {
        const card = document.createElement('article');
        card.className = 'car-card';
        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="card-image" loading="lazy">
            <div class="card-content">
                <div class="car-brand">${car.brand}</div>
                <h2 class="car-name">${car.name}</h2>
                <div class="car-price">${car.price}</div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(car));
        catalogGrid.appendChild(card);
    });

    // Open Modal
    function openModal(car) {
        modalBody.innerHTML = `
            <div class="modal-grid">
                <div class="modal-image-container">
                    <img src="${car.image}" alt="${car.name}">
                </div>
                <div class="modal-info">
                    <div class="modal-tagline">${car.tagline}</div>
                    <h2>${car.name}</h2>
                    <p class="modal-desc">${car.description}</p>
                    
                    <div class="specs-grid">
                        <div class="spec-item">
                            <div class="spec-label">Motor</div>
                            <div class="spec-value">${car.specs.engine}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Potência</div>
                            <div class="spec-value">${car.specs.horsepower}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">0-100 km/h</div>
                            <div class="spec-value">${car.specs.acceleration}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Velocidade Máx.</div>
                            <div class="spec-value">${car.specs.top_speed}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Tração</div>
                            <div class="spec-value">${car.specs.drivetrain}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Câmbio</div>
                            <div class="spec-value">${car.specs.transmission}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Close Modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        // Clear content after animation
        setTimeout(() => {
            if(!modalOverlay.classList.contains('active')) {
                modalBody.innerHTML = '';
            }
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);

    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if(e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
