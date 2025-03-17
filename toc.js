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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="year2025.html"><strong aria-hidden="true">1.</strong> Year2025</a></li><li class="chapter-item expanded "><a href="20250206.html"><strong aria-hidden="true">2.</strong> 20250206</a></li><li class="chapter-item expanded "><a href="20250207.html"><strong aria-hidden="true">3.</strong> 20250207</a></li><li class="chapter-item expanded "><a href="20250208.html"><strong aria-hidden="true">4.</strong> 20250208</a></li><li class="chapter-item expanded "><a href="20250209.html"><strong aria-hidden="true">5.</strong> 20250209</a></li><li class="chapter-item expanded "><a href="20250210.html"><strong aria-hidden="true">6.</strong> 20250210</a></li><li class="chapter-item expanded "><a href="20250211.html"><strong aria-hidden="true">7.</strong> 20250211</a></li><li class="chapter-item expanded "><a href="20250212.html"><strong aria-hidden="true">8.</strong> 20250212</a></li><li class="chapter-item expanded "><a href="20250213.html"><strong aria-hidden="true">9.</strong> 20250213</a></li><li class="chapter-item expanded "><a href="20250214.html"><strong aria-hidden="true">10.</strong> 20250214</a></li><li class="chapter-item expanded "><a href="20250215.html"><strong aria-hidden="true">11.</strong> 20250215</a></li><li class="chapter-item expanded "><a href="20250216.html"><strong aria-hidden="true">12.</strong> 20250216</a></li><li class="chapter-item expanded "><a href="20250217.html"><strong aria-hidden="true">13.</strong> 20250217</a></li><li class="chapter-item expanded "><a href="20250218.html"><strong aria-hidden="true">14.</strong> 20250218</a></li><li class="chapter-item expanded "><a href="20250219.html"><strong aria-hidden="true">15.</strong> 20250219</a></li><li class="chapter-item expanded "><a href="20250220.html"><strong aria-hidden="true">16.</strong> 20250220</a></li><li class="chapter-item expanded "><a href="20250221.html"><strong aria-hidden="true">17.</strong> 20250221</a></li><li class="chapter-item expanded "><a href="20250222.html"><strong aria-hidden="true">18.</strong> 20250222</a></li><li class="chapter-item expanded "><a href="20250223.html"><strong aria-hidden="true">19.</strong> 20250223</a></li><li class="chapter-item expanded "><a href="20250224.html"><strong aria-hidden="true">20.</strong> 20250224</a></li><li class="chapter-item expanded "><a href="20250225.html"><strong aria-hidden="true">21.</strong> 20250225</a></li><li class="chapter-item expanded "><a href="20250226.html"><strong aria-hidden="true">22.</strong> 20250226</a></li><li class="chapter-item expanded "><a href="20250227.html"><strong aria-hidden="true">23.</strong> 20250227</a></li><li class="chapter-item expanded "><a href="20250228.html"><strong aria-hidden="true">24.</strong> 20250228</a></li><li class="chapter-item expanded "><a href="20250301.html"><strong aria-hidden="true">25.</strong> 20250301</a></li><li class="chapter-item expanded "><a href="20250302.html"><strong aria-hidden="true">26.</strong> 20250302</a></li><li class="chapter-item expanded "><a href="20250303.html"><strong aria-hidden="true">27.</strong> 20250303</a></li><li class="chapter-item expanded "><a href="20250304.html"><strong aria-hidden="true">28.</strong> 20250304</a></li><li class="chapter-item expanded "><a href="20250305.html"><strong aria-hidden="true">29.</strong> 20250305</a></li><li class="chapter-item expanded "><a href="20250306.html"><strong aria-hidden="true">30.</strong> 20250306</a></li><li class="chapter-item expanded "><a href="20250307.html"><strong aria-hidden="true">31.</strong> 20250307</a></li><li class="chapter-item expanded "><a href="20250308.html"><strong aria-hidden="true">32.</strong> 20250308</a></li><li class="chapter-item expanded "><a href="20250310.html"><strong aria-hidden="true">33.</strong> 20250310</a></li><li class="chapter-item expanded "><a href="20250311.html"><strong aria-hidden="true">34.</strong> 20250311</a></li><li class="chapter-item expanded "><a href="20250312.html"><strong aria-hidden="true">35.</strong> 20250312</a></li><li class="chapter-item expanded "><a href="20250313.html"><strong aria-hidden="true">36.</strong> 20250313</a></li><li class="chapter-item expanded "><a href="20250314.html"><strong aria-hidden="true">37.</strong> 20250314</a></li><li class="chapter-item expanded "><a href="20250315.html"><strong aria-hidden="true">38.</strong> 20250315</a></li><li class="chapter-item expanded "><a href="20250316.html"><strong aria-hidden="true">39.</strong> 20250316</a></li><li class="chapter-item expanded "><a href="20250317.html"><strong aria-hidden="true">40.</strong> 20250317</a></li></ol>';
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
