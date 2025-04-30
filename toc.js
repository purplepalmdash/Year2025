// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="year2025.html"><strong aria-hidden="true">1.</strong> Year2025</a></li><li class="chapter-item expanded "><a href="20250206.html"><strong aria-hidden="true">2.</strong> 20250206</a></li><li class="chapter-item expanded "><a href="20250207.html"><strong aria-hidden="true">3.</strong> 20250207</a></li><li class="chapter-item expanded "><a href="20250208.html"><strong aria-hidden="true">4.</strong> 20250208</a></li><li class="chapter-item expanded "><a href="20250209.html"><strong aria-hidden="true">5.</strong> 20250209</a></li><li class="chapter-item expanded "><a href="20250210.html"><strong aria-hidden="true">6.</strong> 20250210</a></li><li class="chapter-item expanded "><a href="20250211.html"><strong aria-hidden="true">7.</strong> 20250211</a></li><li class="chapter-item expanded "><a href="20250212.html"><strong aria-hidden="true">8.</strong> 20250212</a></li><li class="chapter-item expanded "><a href="20250213.html"><strong aria-hidden="true">9.</strong> 20250213</a></li><li class="chapter-item expanded "><a href="20250214.html"><strong aria-hidden="true">10.</strong> 20250214</a></li><li class="chapter-item expanded "><a href="20250215.html"><strong aria-hidden="true">11.</strong> 20250215</a></li><li class="chapter-item expanded "><a href="20250216.html"><strong aria-hidden="true">12.</strong> 20250216</a></li><li class="chapter-item expanded "><a href="20250217.html"><strong aria-hidden="true">13.</strong> 20250217</a></li><li class="chapter-item expanded "><a href="20250218.html"><strong aria-hidden="true">14.</strong> 20250218</a></li><li class="chapter-item expanded "><a href="20250219.html"><strong aria-hidden="true">15.</strong> 20250219</a></li><li class="chapter-item expanded "><a href="20250220.html"><strong aria-hidden="true">16.</strong> 20250220</a></li><li class="chapter-item expanded "><a href="20250221.html"><strong aria-hidden="true">17.</strong> 20250221</a></li><li class="chapter-item expanded "><a href="20250222.html"><strong aria-hidden="true">18.</strong> 20250222</a></li><li class="chapter-item expanded "><a href="20250223.html"><strong aria-hidden="true">19.</strong> 20250223</a></li><li class="chapter-item expanded "><a href="20250224.html"><strong aria-hidden="true">20.</strong> 20250224</a></li><li class="chapter-item expanded "><a href="20250225.html"><strong aria-hidden="true">21.</strong> 20250225</a></li><li class="chapter-item expanded "><a href="20250226.html"><strong aria-hidden="true">22.</strong> 20250226</a></li><li class="chapter-item expanded "><a href="20250227.html"><strong aria-hidden="true">23.</strong> 20250227</a></li><li class="chapter-item expanded "><a href="20250228.html"><strong aria-hidden="true">24.</strong> 20250228</a></li><li class="chapter-item expanded "><a href="20250301.html"><strong aria-hidden="true">25.</strong> 20250301</a></li><li class="chapter-item expanded "><a href="20250302.html"><strong aria-hidden="true">26.</strong> 20250302</a></li><li class="chapter-item expanded "><a href="20250303.html"><strong aria-hidden="true">27.</strong> 20250303</a></li><li class="chapter-item expanded "><a href="20250304.html"><strong aria-hidden="true">28.</strong> 20250304</a></li><li class="chapter-item expanded "><a href="20250305.html"><strong aria-hidden="true">29.</strong> 20250305</a></li><li class="chapter-item expanded "><a href="20250306.html"><strong aria-hidden="true">30.</strong> 20250306</a></li><li class="chapter-item expanded "><a href="20250307.html"><strong aria-hidden="true">31.</strong> 20250307</a></li><li class="chapter-item expanded "><a href="20250308.html"><strong aria-hidden="true">32.</strong> 20250308</a></li><li class="chapter-item expanded "><a href="20250310.html"><strong aria-hidden="true">33.</strong> 20250310</a></li><li class="chapter-item expanded "><a href="20250311.html"><strong aria-hidden="true">34.</strong> 20250311</a></li><li class="chapter-item expanded "><a href="20250312.html"><strong aria-hidden="true">35.</strong> 20250312</a></li><li class="chapter-item expanded "><a href="20250313.html"><strong aria-hidden="true">36.</strong> 20250313</a></li><li class="chapter-item expanded "><a href="20250314.html"><strong aria-hidden="true">37.</strong> 20250314</a></li><li class="chapter-item expanded "><a href="20250315.html"><strong aria-hidden="true">38.</strong> 20250315</a></li><li class="chapter-item expanded "><a href="20250316.html"><strong aria-hidden="true">39.</strong> 20250316</a></li><li class="chapter-item expanded "><a href="20250317.html"><strong aria-hidden="true">40.</strong> 20250317</a></li><li class="chapter-item expanded "><a href="20250318.html"><strong aria-hidden="true">41.</strong> 20250318</a></li><li class="chapter-item expanded "><a href="20250319.html"><strong aria-hidden="true">42.</strong> 20250319</a></li><li class="chapter-item expanded "><a href="20250320.html"><strong aria-hidden="true">43.</strong> 20250320</a></li><li class="chapter-item expanded "><a href="20250321.html"><strong aria-hidden="true">44.</strong> 20250321</a></li><li class="chapter-item expanded "><a href="20250322.html"><strong aria-hidden="true">45.</strong> 20250322</a></li><li class="chapter-item expanded "><a href="20250323.html"><strong aria-hidden="true">46.</strong> 20250323</a></li><li class="chapter-item expanded "><a href="20250324.html"><strong aria-hidden="true">47.</strong> 20250324</a></li><li class="chapter-item expanded "><a href="20250325.html"><strong aria-hidden="true">48.</strong> 20250325</a></li><li class="chapter-item expanded "><a href="20250326.html"><strong aria-hidden="true">49.</strong> 20250326</a></li><li class="chapter-item expanded "><a href="20250327.html"><strong aria-hidden="true">50.</strong> 20250327</a></li><li class="chapter-item expanded "><a href="20250328.html"><strong aria-hidden="true">51.</strong> 20250328</a></li><li class="chapter-item expanded "><a href="20250329.html"><strong aria-hidden="true">52.</strong> 20250329</a></li><li class="chapter-item expanded "><a href="20250330.html"><strong aria-hidden="true">53.</strong> 20250330</a></li><li class="chapter-item expanded "><a href="20250331.html"><strong aria-hidden="true">54.</strong> 20250331</a></li><li class="chapter-item expanded "><a href="20250401.html"><strong aria-hidden="true">55.</strong> 20250401</a></li><li class="chapter-item expanded "><a href="20250402.html"><strong aria-hidden="true">56.</strong> 20250402</a></li><li class="chapter-item expanded "><a href="20250403.html"><strong aria-hidden="true">57.</strong> 20250403</a></li><li class="chapter-item expanded "><a href="20250404.html"><strong aria-hidden="true">58.</strong> 20250404</a></li><li class="chapter-item expanded "><a href="20250405.html"><strong aria-hidden="true">59.</strong> 20250405</a></li><li class="chapter-item expanded "><a href="20250406.html"><strong aria-hidden="true">60.</strong> 20250406</a></li><li class="chapter-item expanded "><a href="20250407.html"><strong aria-hidden="true">61.</strong> 20250407</a></li><li class="chapter-item expanded "><a href="20250408.html"><strong aria-hidden="true">62.</strong> 20250408</a></li><li class="chapter-item expanded "><a href="20250409.html"><strong aria-hidden="true">63.</strong> 20250409</a></li><li class="chapter-item expanded "><a href="20250410.html"><strong aria-hidden="true">64.</strong> 20250410</a></li><li class="chapter-item expanded "><a href="20250411.html"><strong aria-hidden="true">65.</strong> 20250411</a></li><li class="chapter-item expanded "><a href="20250412.html"><strong aria-hidden="true">66.</strong> 20250412</a></li><li class="chapter-item expanded "><a href="20250413.html"><strong aria-hidden="true">67.</strong> 20250413</a></li><li class="chapter-item expanded "><a href="20250414.html"><strong aria-hidden="true">68.</strong> 20250414</a></li><li class="chapter-item expanded "><a href="20250415.html"><strong aria-hidden="true">69.</strong> 20250415</a></li><li class="chapter-item expanded "><a href="20250416.html"><strong aria-hidden="true">70.</strong> 20250416</a></li><li class="chapter-item expanded "><a href="20250417.html"><strong aria-hidden="true">71.</strong> 20250417</a></li><li class="chapter-item expanded "><a href="20250418.html"><strong aria-hidden="true">72.</strong> 20250418</a></li><li class="chapter-item expanded "><a href="20250419.html"><strong aria-hidden="true">73.</strong> 20250419</a></li><li class="chapter-item expanded "><a href="20250420.html"><strong aria-hidden="true">74.</strong> 20250420</a></li><li class="chapter-item expanded "><a href="20250421.html"><strong aria-hidden="true">75.</strong> 20250421</a></li><li class="chapter-item expanded "><a href="20250422.html"><strong aria-hidden="true">76.</strong> 20250422</a></li><li class="chapter-item expanded "><a href="20250423.html"><strong aria-hidden="true">77.</strong> 20250423</a></li><li class="chapter-item expanded "><a href="20250424.html"><strong aria-hidden="true">78.</strong> 20250424</a></li><li class="chapter-item expanded "><a href="20250425.html"><strong aria-hidden="true">79.</strong> 20250425</a></li><li class="chapter-item expanded "><a href="20250426.html"><strong aria-hidden="true">80.</strong> 20250426</a></li><li class="chapter-item expanded "><a href="20250427.html"><strong aria-hidden="true">81.</strong> 20250427</a></li><li class="chapter-item expanded "><a href="20250428.html"><strong aria-hidden="true">82.</strong> 20250428</a></li><li class="chapter-item expanded "><a href="20250429.html"><strong aria-hidden="true">83.</strong> 20250429</a></li><li class="chapter-item expanded "><a href="20250430.html"><strong aria-hidden="true">84.</strong> 20250430</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
