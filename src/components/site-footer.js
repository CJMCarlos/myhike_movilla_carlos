class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Footer: single source of truth -->
            <footer class="py-3 my-4 border-top text-center">
                <p class="mb-0 text-muted">&copy; 2025 BCIT COMP1800</p>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);