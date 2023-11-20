const createFooter = function() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const attribution = footer.appendChild(document.createElement('p'));
    attribution.className = 'footer__attribution';
    attribution.textContent = 'Made by grntco';

    const ghIcon = footer.appendChild(document.createElement('img'));
    ghIcon.className = 'footer__gh-icon';

    return footer;
};

export { createFooter };
