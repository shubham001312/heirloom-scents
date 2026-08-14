/**
 * Route-segment loading skeleton — shown while a page's payload is being
 * fetched (initial load, or client navigation when the target route isn't
 * prefetched yet). Matches the brand's cream/maroon palette and reuses the
 * same shimmer motion as the image skeletons, so transitions feel
 * continuous rather than blank.
 */
export default function Loading() {
  return (
    <main id="main-content" className="page-loading" aria-busy="true" aria-label="Loading page">
      <div className="page-loading__inner">
        <div className="page-loading__eyebrow shimmer-block" />
        <div className="page-loading__headline shimmer-block" />
        <div className="page-loading__rule shimmer-block" />
        <div className="page-loading__grid">
          <div className="page-loading__image shimmer-block" />
          <div className="page-loading__text">
            <div className="page-loading__line shimmer-block" />
            <div className="page-loading__line shimmer-block" />
            <div className="page-loading__line shimmer-block" />
            <div className="page-loading__line page-loading__line--short shimmer-block" />
          </div>
        </div>
      </div>
    </main>
  );
}
