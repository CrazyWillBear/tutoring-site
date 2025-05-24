export default Link;

/**
 * Generic link component, allows for consistent styling.
 *
 * @param _href - URL to link to
 * @param txt - Text to display
 * @returns {JSX.Element} The link component
 */
function Link({_href, txt}) {
    return <a href={_href} className="text-sky-300 hover:underline">{txt}</a>
}
