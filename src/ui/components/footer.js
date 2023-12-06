import ghIcon from "../assets/images/github-mark.svg";

export const createFooter = function() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const ghLink = footer.appendChild(document.createElement('a'));
    ghLink.className = 'footer__gh-link';
    ghLink.href = 'https://github.com/grntco';
    ghLink.target = '_blank';

    const description = ghLink.appendChild(document.createElement('p'));
    description.textContent = 'Made by grntco';

    const icon = ghLink.appendChild(document.createElement('img'));
    icon.className = 'footer__gh-link__gh-icon';
    icon.src = ghIcon;

    return footer;
};