const products = [
    {
        id: 1,
        name: "Aura Tailored Jacket",
        category: "apparel",
        badge: "Limited",
        price: 248,
        rating: 4.9,
        inventory: "Low stock",
        image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=85",
        colors: ["#f1eee9", "#1c1c1a", "#8c6b4f"],
        description: "A structured yet soft jacket with sculpted shoulders, recycled lining, and Italian hardware."
    },
    {
        id: 2,
        name: "Vela Crossbody",
        category: "accessory",
        badge: "Best Seller",
        price: 168,
        rating: 4.8,
        inventory: "In stock",
        image: "https://images.unsplash.com/photo-1590739225284-096c90d0d388?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
        colors: ["#101010", "#b59b7b", "#7e2738"],
        description: "Compact, architectural storage in full-grain leather with a hidden magnetic closure."
    },
    {
        id: 3,
        name: "Linea Knit Set",
        category: "apparel",
        badge: "New",
        price: 196,
        rating: 4.7,
        inventory: "In stock",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
        colors: ["#d9d0c3", "#4e5547", "#202225"],
        description: "A breathable ribbed co-ord engineered for travel days, studio mornings, and late dinners."
    },
    {
        id: 4,
        name: "Monolith Sneaker",
        category: "limited",
        badge: "Drop",
        price: 220,
        rating: 4.9,
        inventory: "Few left",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85",
        colors: ["#f3f3ef", "#252525", "#b63d2c"],
        description: "A sculptural sneaker with cloud foam cushioning and a hand-finished rubberized shell."
    },
    {
        id: 5,
        name: "Aster Silk Shirt",
        category: "apparel",
        badge: "Editor Pick",
        price: 142,
        rating: 4.8,
        inventory: "In stock",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85",
        colors: ["#f8efe4", "#324244", "#a76344"],
        description: "Washed silk with a relaxed collar, mother-of-pearl buttons, and an easy fluid drape."
    },
    {
        id: 6,
        name: "Orbit Sunglasses",
        category: "accessory",
        badge: "Trending",
        price: 128,
        rating: 4.6,
        inventory: "In stock",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=85",
        colors: ["#121212", "#5e4636", "#c8c3b8"],
        description: "Featherlight acetate frames with polarized gradient lenses and low-profile temple detailing."
    },
    {
        id: 7,
        name: "Cedar Utility Tote",
        category: "accessory",
        badge: "Utility",
        price: 186,
        rating: 4.7,
        inventory: "In stock",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?auto=format&fit=crop&w=900&q=85",
        colors: ["#7d5f43", "#202020", "#e4dbcc"],
        description: "A daily carryall with laptop structure, hidden bottle pocket, and reinforced base."
    },
    {
        id: 8,
        name: "Nocturne Dress",
        category: "limited",
        badge: "Limited",
        price: 288,
        rating: 5,
        inventory: "Low stock",
        image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=900&q=85",
        hover: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
        colors: ["#161616", "#533c55", "#b9aa8d"],
        description: "A fluid evening dress cut on the bias with a matte sheen and adjustable open back."
    }
];

const recommendations = {
    work: {
        title: "Polished Work Edit",
        product: "Aura Tailored Jacket",
        copy: "Structured jacket, silk shirt, and carryall selected for high-frequency weekdays.",
        image: products[0].image,
        bullets: ["Neutral palette", "Low-crease fabrics", "Ships tomorrow"]
    },
    weekend: {
        title: "Soft Weekend Edit",
        product: "Linea Knit Set",
        copy: "Comfort-led staples with elevated texture and easy styling paths.",
        image: products[2].image,
        bullets: ["Breathable knit", "Two-piece flexibility", "Pairs with Orbit"]
    },
    evening: {
        title: "Evening Signal Edit",
        product: "Nocturne Dress",
        copy: "A sharper, darker edit for dinners, openings, and late plans.",
        image: products[7].image,
        bullets: ["Limited drop", "Bias-cut drape", "Matched accessories"]
    }
};

const state = {
    filter: "all",
    search: "",
    sort: "featured",
    cart: [],
    wishlist: new Set(),
    discount: 0
};

let quickViewModal;
let cartCanvas;
let toast;
let chatUnreadCount = 1;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const money = (value) => `$${Math.round(value).toLocaleString("en-US")}`;

function init() {
    restoreTheme();
    initBootstrap();
    renderSkeletons();
    renderCart();
    renderRecommendation("work");
    bindEvents();
    observeSections();
    initTilt();
    setTimeout(() => {
        renderProducts();
        $("[data-loader]")?.classList.add("hidden");
    }, 420);
}

function initBootstrap() {
    if (!window.bootstrap) return;
    $$("[data-bs-toggle-tooltip]").forEach((item) => new bootstrap.Tooltip(item));
    const quickView = $("#quickViewModal");
    const cart = $("#cartCanvas");
    const toastElement = $("[data-toast]");
    if (quickView) quickViewModal = new bootstrap.Modal(quickView);
    if (cart) cartCanvas = new bootstrap.Offcanvas(cart);
    if (toastElement) toast = new bootstrap.Toast(toastElement, { delay: 2200 });
}

function bindEvents() {
    $("[data-theme-toggle]")?.addEventListener("click", toggleTheme);
    $("[data-search]")?.addEventListener("input", (event) => {
        state.search = event.target.value.trim().toLowerCase();
        renderProducts();
    });

    $("[data-sort]")?.addEventListener("change", (event) => {
        state.sort = event.target.value;
        renderProducts();
    });

    $$("[data-filter]").forEach((button) => {
        button.addEventListener("click", () => {
            state.filter = button.dataset.filter;
            $$("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
            renderProducts();
        });
    });

    $$("[data-mood]").forEach((button) => {
        button.addEventListener("click", () => {
            $$("[data-mood]").forEach((item) => item.classList.toggle("active", item === button));
            renderRecommendation(button.dataset.mood);
        });
    });

    $$("[data-swatch]").forEach((button) => {
        button.addEventListener("click", () => {
            $$("[data-swatch]").forEach((item) => item.classList.toggle("active", item === button));
            $("[data-selected-color]").textContent = `${button.dataset.swatch} selected`;
        });
    });

    $("[data-apply-coupon]")?.addEventListener("click", applyCoupon);
    $("[data-newsletter]")?.addEventListener("submit", handleNewsletter);
    $("[data-back-top]")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    $("[data-chat-time]").textContent = getChatTime();
    $("[data-chat-toggle]")?.addEventListener("click", openChat);
    $("[data-chat-close]")?.addEventListener("click", closeChat);
    $("[data-chat-minimize]")?.addEventListener("click", minimizeChat);
    $("[data-chat-form]")?.addEventListener("submit", handleChatSubmit);
    $$("[data-chat-quick]").forEach((button) => {
        button.addEventListener("click", () => sendChatMessage(button.dataset.chatQuick));
    });

    document.addEventListener("click", handleProductActions);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && $("[data-chat-panel]")?.classList.contains("open")) {
            closeChat();
        }
    });
    document.addEventListener("mousemove", handleMagneticButtons);
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateChatUnread();
}

function renderSkeletons() {
    const grid = $("[data-products]");
    if (!grid) return;
    grid.innerHTML = Array.from({ length: 4 }, () => `<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"><div class="skeleton-card"></div></div>`).join("");
}

function getVisibleProducts() {
    let visible = products.filter((product) => {
        const matchesFilter = state.filter === "all" || product.category === state.filter || product.badge.toLowerCase() === state.filter;
        const haystack = `${product.name} ${product.category} ${product.badge} ${product.description}`.toLowerCase();
        return matchesFilter && haystack.includes(state.search);
    });

    if (state.sort === "price-low") visible = [...visible].sort((a, b) => a.price - b.price);
    if (state.sort === "price-high") visible = [...visible].sort((a, b) => b.price - a.price);
    if (state.sort === "rating") visible = [...visible].sort((a, b) => b.rating - a.rating);
    return visible;
}

function renderProducts() {
    const grid = $("[data-products]");
    if (!grid) return;
    const visible = getVisibleProducts();

    grid.innerHTML = visible.map((product) => `
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <article class="product-card card" data-product-id="${product.id}">
                <div class="product-media">
                    <span class="badge rounded-pill product-badge">${product.badge}</span>
                    <div class="product-actions">
                        <button class="icon-button wishlist ${state.wishlist.has(product.id) ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="Add ${product.name} to wishlist" data-bs-title="Wishlist" data-bs-toggle-tooltip><i class="fa-solid fa-heart"></i></button>
                        <button class="icon-button" type="button" data-compare="${product.id}" aria-label="Compare ${product.name}" data-bs-title="Compare" data-bs-toggle-tooltip><i class="fa-solid fa-code-compare"></i></button>
                        <button class="icon-button" type="button" data-share="${product.id}" aria-label="Share ${product.name}" data-bs-title="Share" data-bs-toggle-tooltip><i class="fa-solid fa-share-nodes"></i></button>
                    </div>
                    <img src="${product.image}" data-hover="${product.hover}" data-original="${product.image}" alt="${product.name}">
                </div>
                <div class="card-body px-0 pb-0">
                    <div class="product-title-row">
                        <h3>${product.name}</h3>
                        <strong>${money(product.price)}</strong>
                    </div>
                    <div class="product-meta my-2">
                        <span class="rating-stars">${renderStars(product.rating)}</span>
                        <span>${product.inventory}</span>
                    </div>
                    <div class="variant-row mb-3" aria-label="Available colors">
                        ${product.colors.map((color) => `<span class="variant-dot" style="--variant:${color}"></span>`).join("")}
                    </div>
                    <div class="card-actions">
                        <button class="mini-button" type="button" data-add="${product.id}"><i class="fa-solid fa-cart-plus"></i>Add</button>
                        <button class="quick-button" type="button" data-quick="${product.id}" aria-label="Quick view ${product.name}" data-bs-title="Quick view" data-bs-toggle-tooltip><i class="fa-solid fa-eye"></i></button>
                        <button class="quick-button" type="button" data-share="${product.id}" aria-label="Share ${product.name}" data-bs-title="Share" data-bs-toggle-tooltip><i class="fa-solid fa-share-nodes"></i></button>
                    </div>
                </div>
            </article>
        </div>
    `).join("") || `<div class="col-12"><p class="empty-state">No products matched your edit.</p></div>`;

    $$(".product-media img").forEach((image) => {
        image.addEventListener("mouseenter", () => image.src = image.dataset.hover);
        image.addEventListener("mouseleave", () => image.src = image.dataset.original);
    });
    refreshTooltips();
}

function renderStars(rating) {
    const full = Math.round(rating);
    return Array.from({ length: 5 }, (_, index) => `<i class="fa-solid fa-star${index < full ? "" : " opacity-25"}"></i>`).join("");
}

function handleProductActions(event) {
    const addButton = event.target.closest("[data-add]");
    const quickButton = event.target.closest("[data-quick]");
    const wishlistButton = event.target.closest("[data-wishlist]");
    const removeButton = event.target.closest("[data-remove]");
    const incButton = event.target.closest("[data-increase]");
    const decButton = event.target.closest("[data-decrease]");
    const compareButton = event.target.closest("[data-compare]");
    const shareButton = event.target.closest("[data-share]");

    if (addButton) addToCart(Number(addButton.dataset.add));
    if (quickButton) openQuickView(Number(quickButton.dataset.quick));
    if (wishlistButton) toggleWishlist(Number(wishlistButton.dataset.wishlist));
    if (removeButton) removeFromCart(Number(removeButton.dataset.remove));
    if (incButton) changeQuantity(Number(incButton.dataset.increase), 1);
    if (decButton) changeQuantity(Number(decButton.dataset.decrease), -1);
    if (compareButton) showToast("Added to comparison tray.");
    if (shareButton) shareProduct(Number(shareButton.dataset.share));
}

function addToCart(id) {
    const item = state.cart.find((entry) => entry.id === id);
    if (item) item.qty += 1;
    else state.cart.push({ id, qty: 1 });
    state.discount = 0;
    renderCart(true);
    showToast("Added to cart.");
    cartCanvas?.show();
}

function removeFromCart(id) {
    state.cart = state.cart.filter((item) => item.id !== id);
    renderCart(true);
    showToast("Removed from cart.");
}

function changeQuantity(id, amount) {
    const item = state.cart.find((entry) => entry.id === id);
    if (!item) return;
    item.qty += amount;
    if (item.qty <= 0) removeFromCart(id);
    else renderCart(true);
}

function toggleWishlist(id) {
    if (state.wishlist.has(id)) {
        state.wishlist.delete(id);
        showToast("Removed from wishlist.");
    } else {
        state.wishlist.add(id);
        showToast("Saved to wishlist.");
    }
    renderProducts();
    updateWishlistCount(true);
}

function renderCart(animate = false) {
    const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = state.cart.reduce((sum, item) => {
        const product = products.find((entry) => entry.id === item.id);
        return sum + product.price * item.qty;
    }, 0);
    const total = subtotal * (1 - state.discount);

    const cartCount = $("[data-cart-count]");
    if (cartCount) {
        cartCount.textContent = count;
        if (animate) bumpBadge(cartCount);
    }
    const totalElement = $("[data-cart-total]");
    if (totalElement) totalElement.textContent = money(total);
    const itemsElement = $("[data-cart-items]");
    if (!itemsElement) return;

    itemsElement.innerHTML = state.cart.map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        return `
            <article class="cart-item">
                <div>
                    <strong>${product.name}</strong>
                    <span>Qty ${item.qty} &middot; ${money(product.price)}</span>
                    <div class="qty-controls" aria-label="Change quantity for ${product.name}">
                        <button type="button" data-decrease="${product.id}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                        <span>${item.qty}</span>
                        <button type="button" data-increase="${product.id}" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <button class="icon-button" type="button" data-remove="${product.id}" aria-label="Remove ${product.name}" data-bs-title="Remove" data-bs-toggle-tooltip><i class="fa-solid fa-trash"></i></button>
            </article>
        `;
    }).join("") || `<p class="empty-state">Your cart is ready for something excellent.</p>`;
    refreshTooltips();
}

function updateWishlistCount(animate = false) {
    const count = $("[data-wishlist-count]");
    if (!count) return;
    count.textContent = state.wishlist.size;
    if (animate) bumpBadge(count);
}

function bumpBadge(element) {
    element.classList.remove("bump");
    window.requestAnimationFrame(() => {
        element.classList.add("bump");
        setTimeout(() => element.classList.remove("bump"), 260);
    });
}

function applyCoupon() {
    const input = $("[data-coupon]");
    if (!input) return;
    state.discount = input.value.trim().toUpperCase() === "NOVA15" ? 0.15 : 0;
    input.value = state.discount ? "NOVA15 applied" : "Try NOVA15";
    renderCart(true);
    showToast(state.discount ? "Coupon applied." : "Coupon not recognized.");
}

function openQuickView(id) {
    const product = products.find((entry) => entry.id === id);
    $("[data-modal-content]").innerHTML = `
        <div class="modal-layout">
            <img src="${product.image}" alt="${product.name}">
            <div class="modal-copy">
                <p class="eyebrow"><i class="fa-solid fa-eye"></i>${product.badge}</p>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="product-meta">
                    <span class="rating-stars">${renderStars(product.rating)}</span>
                    <span>${product.inventory}</span>
                </div>
                <strong>${money(product.price)}</strong>
                <div class="d-flex flex-wrap gap-2">
                    <button class="button primary" type="button" data-add="${product.id}"><i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
                    <button class="quick-button" type="button" data-wishlist="${product.id}" aria-label="Wishlist ${product.name}" data-bs-title="Wishlist" data-bs-toggle-tooltip><i class="fa-solid fa-heart"></i></button>
                    <button class="quick-button" type="button" data-share="${product.id}" aria-label="Share ${product.name}" data-bs-title="Share" data-bs-toggle-tooltip><i class="fa-solid fa-share-nodes"></i></button>
                </div>
            </div>
        </div>
    `;
    refreshTooltips();
    quickViewModal?.show();
}

function renderRecommendation(mood) {
    const recommendation = recommendations[mood];
    const product = products.find((entry) => entry.name === recommendation.product);
    $("[data-recommendation]").innerHTML = `
        <img src="${recommendation.image}" alt="${recommendation.product}">
        <div>
            <p class="eyebrow"><i class="fa-solid fa-wand-magic-sparkles"></i>Smart recommendation</p>
            <h3>${recommendation.title}</h3>
            <p>${recommendation.copy}</p>
            <ul>
                ${recommendation.bullets.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <button class="button primary" type="button" data-add="${product.id}"><i class="fa-solid fa-cart-plus"></i>Add suggested piece</button>
        </div>
    `;
}

function shareProduct(id) {
    const product = products.find((entry) => entry.id === id);
    if (navigator.share) {
        navigator.share({ title: product.name, text: product.description, url: window.location.href }).catch(() => {});
    } else {
        showToast(`Share ${product.name} with your circle.`);
    }
}

function handleNewsletter(event) {
    event.preventDefault();
    const message = $("[data-form-message]");
    message.textContent = "You are on the private list. Watch your inbox.";
    event.currentTarget.reset();
    showToast("Private list confirmed.");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("nova-theme", document.body.classList.contains("dark") ? "dark" : "light");
    showToast(document.body.classList.contains("dark") ? "Dark theme enabled." : "Light theme enabled.");
}

function restoreTheme() {
    if (localStorage.getItem("nova-theme") === "dark") {
        document.body.classList.add("dark");
    }
}

function handleScroll() {
    const isScrolled = window.scrollY > 18;
    $("[data-header]")?.classList.toggle("scrolled", isScrolled);
    $("[data-back-top]")?.classList.toggle("visible", window.scrollY > 650);
}

function observeSections() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                animateCounters(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    $$(".section-observe").forEach((section) => observer.observe(section));
}

function animateCounters(section) {
    $$("[data-count-up]", section).forEach((counter) => {
        const target = Number(counter.dataset.countUp);
        const duration = 1300;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * eased).toLocaleString("en-US");
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    });
}

function handleMagneticButtons(event) {
    $$(".magnetic").forEach((button) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const distance = Math.hypot(x, y);

        if (distance < 120) {
            button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
        } else {
            button.style.transform = "";
        }
    });
}

function initTilt() {
    $$("[data-tilt]").forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

function refreshTooltips() {
    if (!window.bootstrap) return;
    $$("[data-bs-toggle-tooltip]").forEach((item) => {
        const existing = bootstrap.Tooltip.getInstance(item);
        if (existing) existing.dispose();
        new bootstrap.Tooltip(item);
    });
}

function showToast(message) {
    const messageElement = $("[data-toast-message]");
    if (messageElement) messageElement.textContent = message;
    toast?.show();
}

function openChat() {
    const panel = $("[data-chat-panel]");
    const input = $("[data-chat-input]");
    if (!panel) return;
    panel.classList.add("open");
    panel.classList.remove("minimized");
    panel.setAttribute("aria-hidden", "false");
    chatUnreadCount = 0;
    updateChatUnread();
    scrollChatToBottom();
    setTimeout(() => input?.focus(), 180);
}

function closeChat() {
    const panel = $("[data-chat-panel]");
    if (!panel) return;
    panel.classList.remove("open", "minimized");
    panel.setAttribute("aria-hidden", "true");
    $("[data-chat-toggle]")?.focus();
}

function minimizeChat() {
    const panel = $("[data-chat-panel]");
    if (!panel) return;
    panel.classList.toggle("minimized");
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
}

function handleChatSubmit(event) {
    event.preventDefault();
    const input = $("[data-chat-input]");
    const message = input?.value.trim();
    if (!message) return;
    input.value = "";
    sendChatMessage(message);
}

function sendChatMessage(message) {
    addChatMessage(message, "user");
    setTimeout(() => {
        addChatMessage(getChatReply(message), "support");
        if (!$("[data-chat-panel]")?.classList.contains("open")) {
            chatUnreadCount += 1;
            updateChatUnread();
        }
    }, 520);
}

function getChatReply(message) {
    const text = message.toLowerCase();
    if (text.includes("order") || text.includes("track")) {
        return "To track your order, please provide your order number.";
    }
    if (text.includes("shipping") || text.includes("delivery")) {
        return "Standard shipping takes 3-7 business days.";
    }
    if (text.includes("payment") || text.includes("upi") || text.includes("paypal")) {
        return "We accept all major credit cards, UPI, and PayPal.";
    }
    if (text.includes("contact") || text.includes("support")) {
        return "You can reach our support team 24/7.";
    }
    return "Thank you for your message. Our team will get back to you shortly.";
}

function addChatMessage(message, type) {
    const body = $("[data-chat-body]");
    if (!body) return;
    const article = document.createElement("article");
    article.className = `chat-message ${type}`;
    article.innerHTML = `
        <div class="chat-bubble">
            <p>${escapeHtml(message)}</p>
            <time>${getChatTime()}</time>
        </div>
    `;
    body.appendChild(article);
    scrollChatToBottom();
}

function scrollChatToBottom() {
    const body = $("[data-chat-body]");
    if (body) body.scrollTop = body.scrollHeight;
}

function updateChatUnread() {
    const badge = $("[data-chat-unread]");
    if (!badge) return;
    badge.textContent = chatUnreadCount;
    badge.classList.toggle("hidden", chatUnreadCount === 0);
    if (chatUnreadCount > 0) {
        badge.classList.remove("bump");
        requestAnimationFrame(() => badge.classList.add("bump"));
    }
}

function getChatTime() {
    return new Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "2-digit"
    }).format(new Date());
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

init();
