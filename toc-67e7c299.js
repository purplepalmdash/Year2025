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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="year2025.html"><strong aria-hidden="true">1.</strong> Year2025</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250206.html"><strong aria-hidden="true">2.</strong> 20250206</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250207.html"><strong aria-hidden="true">3.</strong> 20250207</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250208.html"><strong aria-hidden="true">4.</strong> 20250208</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250209.html"><strong aria-hidden="true">5.</strong> 20250209</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250210.html"><strong aria-hidden="true">6.</strong> 20250210</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250211.html"><strong aria-hidden="true">7.</strong> 20250211</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250212.html"><strong aria-hidden="true">8.</strong> 20250212</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250213.html"><strong aria-hidden="true">9.</strong> 20250213</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250214.html"><strong aria-hidden="true">10.</strong> 20250214</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250215.html"><strong aria-hidden="true">11.</strong> 20250215</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250216.html"><strong aria-hidden="true">12.</strong> 20250216</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250217.html"><strong aria-hidden="true">13.</strong> 20250217</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250218.html"><strong aria-hidden="true">14.</strong> 20250218</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250219.html"><strong aria-hidden="true">15.</strong> 20250219</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250220.html"><strong aria-hidden="true">16.</strong> 20250220</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250221.html"><strong aria-hidden="true">17.</strong> 20250221</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250222.html"><strong aria-hidden="true">18.</strong> 20250222</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250223.html"><strong aria-hidden="true">19.</strong> 20250223</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250224.html"><strong aria-hidden="true">20.</strong> 20250224</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250225.html"><strong aria-hidden="true">21.</strong> 20250225</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250226.html"><strong aria-hidden="true">22.</strong> 20250226</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250227.html"><strong aria-hidden="true">23.</strong> 20250227</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250228.html"><strong aria-hidden="true">24.</strong> 20250228</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250301.html"><strong aria-hidden="true">25.</strong> 20250301</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250302.html"><strong aria-hidden="true">26.</strong> 20250302</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250303.html"><strong aria-hidden="true">27.</strong> 20250303</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250304.html"><strong aria-hidden="true">28.</strong> 20250304</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250305.html"><strong aria-hidden="true">29.</strong> 20250305</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250306.html"><strong aria-hidden="true">30.</strong> 20250306</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250307.html"><strong aria-hidden="true">31.</strong> 20250307</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250308.html"><strong aria-hidden="true">32.</strong> 20250308</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250310.html"><strong aria-hidden="true">33.</strong> 20250310</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250311.html"><strong aria-hidden="true">34.</strong> 20250311</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250312.html"><strong aria-hidden="true">35.</strong> 20250312</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250313.html"><strong aria-hidden="true">36.</strong> 20250313</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250314.html"><strong aria-hidden="true">37.</strong> 20250314</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250315.html"><strong aria-hidden="true">38.</strong> 20250315</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250316.html"><strong aria-hidden="true">39.</strong> 20250316</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250317.html"><strong aria-hidden="true">40.</strong> 20250317</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250318.html"><strong aria-hidden="true">41.</strong> 20250318</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250319.html"><strong aria-hidden="true">42.</strong> 20250319</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250320.html"><strong aria-hidden="true">43.</strong> 20250320</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250321.html"><strong aria-hidden="true">44.</strong> 20250321</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250322.html"><strong aria-hidden="true">45.</strong> 20250322</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250323.html"><strong aria-hidden="true">46.</strong> 20250323</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250324.html"><strong aria-hidden="true">47.</strong> 20250324</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250325.html"><strong aria-hidden="true">48.</strong> 20250325</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250326.html"><strong aria-hidden="true">49.</strong> 20250326</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250327.html"><strong aria-hidden="true">50.</strong> 20250327</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250328.html"><strong aria-hidden="true">51.</strong> 20250328</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250329.html"><strong aria-hidden="true">52.</strong> 20250329</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250330.html"><strong aria-hidden="true">53.</strong> 20250330</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250331.html"><strong aria-hidden="true">54.</strong> 20250331</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250401.html"><strong aria-hidden="true">55.</strong> 20250401</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250402.html"><strong aria-hidden="true">56.</strong> 20250402</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250403.html"><strong aria-hidden="true">57.</strong> 20250403</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250404.html"><strong aria-hidden="true">58.</strong> 20250404</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250405.html"><strong aria-hidden="true">59.</strong> 20250405</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250406.html"><strong aria-hidden="true">60.</strong> 20250406</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250407.html"><strong aria-hidden="true">61.</strong> 20250407</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250408.html"><strong aria-hidden="true">62.</strong> 20250408</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250409.html"><strong aria-hidden="true">63.</strong> 20250409</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250410.html"><strong aria-hidden="true">64.</strong> 20250410</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250411.html"><strong aria-hidden="true">65.</strong> 20250411</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250412.html"><strong aria-hidden="true">66.</strong> 20250412</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250413.html"><strong aria-hidden="true">67.</strong> 20250413</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250414.html"><strong aria-hidden="true">68.</strong> 20250414</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250415.html"><strong aria-hidden="true">69.</strong> 20250415</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250416.html"><strong aria-hidden="true">70.</strong> 20250416</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250417.html"><strong aria-hidden="true">71.</strong> 20250417</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250418.html"><strong aria-hidden="true">72.</strong> 20250418</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250419.html"><strong aria-hidden="true">73.</strong> 20250419</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250420.html"><strong aria-hidden="true">74.</strong> 20250420</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250421.html"><strong aria-hidden="true">75.</strong> 20250421</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250422.html"><strong aria-hidden="true">76.</strong> 20250422</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250423.html"><strong aria-hidden="true">77.</strong> 20250423</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250424.html"><strong aria-hidden="true">78.</strong> 20250424</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250425.html"><strong aria-hidden="true">79.</strong> 20250425</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250426.html"><strong aria-hidden="true">80.</strong> 20250426</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250427.html"><strong aria-hidden="true">81.</strong> 20250427</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250428.html"><strong aria-hidden="true">82.</strong> 20250428</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250429.html"><strong aria-hidden="true">83.</strong> 20250429</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250430.html"><strong aria-hidden="true">84.</strong> 20250430</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250501.html"><strong aria-hidden="true">85.</strong> 20250501</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250502.html"><strong aria-hidden="true">86.</strong> 20250502</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250503.html"><strong aria-hidden="true">87.</strong> 20250503</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250504.html"><strong aria-hidden="true">88.</strong> 20250504</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250505.html"><strong aria-hidden="true">89.</strong> 20250505</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250506.html"><strong aria-hidden="true">90.</strong> 20250506</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250507.html"><strong aria-hidden="true">91.</strong> 20250507</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250508.html"><strong aria-hidden="true">92.</strong> 20250508</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250509.html"><strong aria-hidden="true">93.</strong> 20250509</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250510.html"><strong aria-hidden="true">94.</strong> 20250510</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250511.html"><strong aria-hidden="true">95.</strong> 20250511</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250512.html"><strong aria-hidden="true">96.</strong> 20250512</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250513.html"><strong aria-hidden="true">97.</strong> 20250513</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250514.html"><strong aria-hidden="true">98.</strong> 20250514</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250515.html"><strong aria-hidden="true">99.</strong> 20250515</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250516.html"><strong aria-hidden="true">100.</strong> 20250516</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250517.html"><strong aria-hidden="true">101.</strong> 20250517</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250518.html"><strong aria-hidden="true">102.</strong> 20250518</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250519.html"><strong aria-hidden="true">103.</strong> 20250519</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250520.html"><strong aria-hidden="true">104.</strong> 20250520</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250521.html"><strong aria-hidden="true">105.</strong> 20250521</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250522.html"><strong aria-hidden="true">106.</strong> 20250522</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250523.html"><strong aria-hidden="true">107.</strong> 20250523</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250524.html"><strong aria-hidden="true">108.</strong> 20250524</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250525.html"><strong aria-hidden="true">109.</strong> 20250525</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250526.html"><strong aria-hidden="true">110.</strong> 20250526</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250527.html"><strong aria-hidden="true">111.</strong> 20250527</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250528.html"><strong aria-hidden="true">112.</strong> 20250528</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250529.html"><strong aria-hidden="true">113.</strong> 20250529</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250530.html"><strong aria-hidden="true">114.</strong> 20250530</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250531.html"><strong aria-hidden="true">115.</strong> 20250531</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250601.html"><strong aria-hidden="true">116.</strong> 20250601</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250602.html"><strong aria-hidden="true">117.</strong> 20250602</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250603.html"><strong aria-hidden="true">118.</strong> 20250603</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250604.html"><strong aria-hidden="true">119.</strong> 20250604</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250605.html"><strong aria-hidden="true">120.</strong> 20250605</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250606.html"><strong aria-hidden="true">121.</strong> 20250606</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250607.html"><strong aria-hidden="true">122.</strong> 20250607</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250608.html"><strong aria-hidden="true">123.</strong> 20250608</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250609.html"><strong aria-hidden="true">124.</strong> 20250609</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250610.html"><strong aria-hidden="true">125.</strong> 20250610</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250611.html"><strong aria-hidden="true">126.</strong> 20250611</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250612.html"><strong aria-hidden="true">127.</strong> 20250612</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250613.html"><strong aria-hidden="true">128.</strong> 20250613</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250614.html"><strong aria-hidden="true">129.</strong> 20250614</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250615.html"><strong aria-hidden="true">130.</strong> 20250615</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250616.html"><strong aria-hidden="true">131.</strong> 20250616</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250617.html"><strong aria-hidden="true">132.</strong> 20250617</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250618.html"><strong aria-hidden="true">133.</strong> 20250618</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250619.html"><strong aria-hidden="true">134.</strong> 20250619</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250620.html"><strong aria-hidden="true">135.</strong> 20250620</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250621.html"><strong aria-hidden="true">136.</strong> 20250621</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250622.html"><strong aria-hidden="true">137.</strong> 20250622</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250623.html"><strong aria-hidden="true">138.</strong> 20250623</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250624.html"><strong aria-hidden="true">139.</strong> 20250624</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250625.html"><strong aria-hidden="true">140.</strong> 20250625</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250626.html"><strong aria-hidden="true">141.</strong> 20250626</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250627.html"><strong aria-hidden="true">142.</strong> 20250627</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250630.html"><strong aria-hidden="true">143.</strong> 20250630</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250701.html"><strong aria-hidden="true">144.</strong> 20250701</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250702.html"><strong aria-hidden="true">145.</strong> 20250702</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250703.html"><strong aria-hidden="true">146.</strong> 20250703</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250704.html"><strong aria-hidden="true">147.</strong> 20250704</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250705.html"><strong aria-hidden="true">148.</strong> 20250705</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250706.html"><strong aria-hidden="true">149.</strong> 20250706</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250707.html"><strong aria-hidden="true">150.</strong> 20250707</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250708.html"><strong aria-hidden="true">151.</strong> 20250708</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250709.html"><strong aria-hidden="true">152.</strong> 20250709</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250710.html"><strong aria-hidden="true">153.</strong> 20250710</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250711.html"><strong aria-hidden="true">154.</strong> 20250711</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250712.html"><strong aria-hidden="true">155.</strong> 20250712</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250713.html"><strong aria-hidden="true">156.</strong> 20250713</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250714.html"><strong aria-hidden="true">157.</strong> 20250714</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250715.html"><strong aria-hidden="true">158.</strong> 20250715</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250716.html"><strong aria-hidden="true">159.</strong> 20250716</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250717.html"><strong aria-hidden="true">160.</strong> 20250717</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250718.html"><strong aria-hidden="true">161.</strong> 20250718</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250721.html"><strong aria-hidden="true">162.</strong> 20250721</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250722.html"><strong aria-hidden="true">163.</strong> 20250722</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250723.html"><strong aria-hidden="true">164.</strong> 20250723</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250724.html"><strong aria-hidden="true">165.</strong> 20250724</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250725.html"><strong aria-hidden="true">166.</strong> 20250725</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250728.html"><strong aria-hidden="true">167.</strong> 20250728</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250729.html"><strong aria-hidden="true">168.</strong> 20250729</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250730.html"><strong aria-hidden="true">169.</strong> 20250730</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250731.html"><strong aria-hidden="true">170.</strong> 20250731</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250801.html"><strong aria-hidden="true">171.</strong> 20250801</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250804.html"><strong aria-hidden="true">172.</strong> 20250804</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250805.html"><strong aria-hidden="true">173.</strong> 20250805</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250811.html"><strong aria-hidden="true">174.</strong> 20250811</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250812.html"><strong aria-hidden="true">175.</strong> 20250812</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250813.html"><strong aria-hidden="true">176.</strong> 20250813</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250814.html"><strong aria-hidden="true">177.</strong> 20250814</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250815.html"><strong aria-hidden="true">178.</strong> 20250815</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250818.html"><strong aria-hidden="true">179.</strong> 20250818</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250819.html"><strong aria-hidden="true">180.</strong> 20250819</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250820.html"><strong aria-hidden="true">181.</strong> 20250820</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250821.html"><strong aria-hidden="true">182.</strong> 20250821</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250822.html"><strong aria-hidden="true">183.</strong> 20250822</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250825.html"><strong aria-hidden="true">184.</strong> 20250825</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250826.html"><strong aria-hidden="true">185.</strong> 20250826</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250827.html"><strong aria-hidden="true">186.</strong> 20250827</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250828.html"><strong aria-hidden="true">187.</strong> 20250828</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250829.html"><strong aria-hidden="true">188.</strong> 20250829</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250901.html"><strong aria-hidden="true">189.</strong> 20250901</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250902.html"><strong aria-hidden="true">190.</strong> 20250902</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250903.html"><strong aria-hidden="true">191.</strong> 20250903</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250904.html"><strong aria-hidden="true">192.</strong> 20250904</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250905.html"><strong aria-hidden="true">193.</strong> 20250905</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250908.html"><strong aria-hidden="true">194.</strong> 20250908</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250909.html"><strong aria-hidden="true">195.</strong> 20250909</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250910.html"><strong aria-hidden="true">196.</strong> 20250910</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250911.html"><strong aria-hidden="true">197.</strong> 20250911</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250912.html"><strong aria-hidden="true">198.</strong> 20250912</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250914.html"><strong aria-hidden="true">199.</strong> 20250914</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250915.html"><strong aria-hidden="true">200.</strong> 20250915</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250916.html"><strong aria-hidden="true">201.</strong> 20250916</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250917.html"><strong aria-hidden="true">202.</strong> 20250917</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250918.html"><strong aria-hidden="true">203.</strong> 20250918</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250919.html"><strong aria-hidden="true">204.</strong> 20250919</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250922.html"><strong aria-hidden="true">205.</strong> 20250922</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250923.html"><strong aria-hidden="true">206.</strong> 20250923</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250924.html"><strong aria-hidden="true">207.</strong> 20250924</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250925.html"><strong aria-hidden="true">208.</strong> 20250925</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250926.html"><strong aria-hidden="true">209.</strong> 20250926</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250928.html"><strong aria-hidden="true">210.</strong> 20250928</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250929.html"><strong aria-hidden="true">211.</strong> 20250929</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20250930.html"><strong aria-hidden="true">212.</strong> 20250930</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251001.html"><strong aria-hidden="true">213.</strong> 20251001</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251002.html"><strong aria-hidden="true">214.</strong> 20251002</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251005.html"><strong aria-hidden="true">215.</strong> 20251005</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251009.html"><strong aria-hidden="true">216.</strong> 20251009</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251010.html"><strong aria-hidden="true">217.</strong> 20251010</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251011.html"><strong aria-hidden="true">218.</strong> 20251011</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251013.html"><strong aria-hidden="true">219.</strong> 20251013</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251014.html"><strong aria-hidden="true">220.</strong> 20251014</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251015.html"><strong aria-hidden="true">221.</strong> 20251015</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251016.html"><strong aria-hidden="true">222.</strong> 20251016</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251017.html"><strong aria-hidden="true">223.</strong> 20251017</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251018.html"><strong aria-hidden="true">224.</strong> 20251018</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251019.html"><strong aria-hidden="true">225.</strong> 20251019</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251020.html"><strong aria-hidden="true">226.</strong> 20251020</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251021.html"><strong aria-hidden="true">227.</strong> 20251021</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251022.html"><strong aria-hidden="true">228.</strong> 20251022</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251023.html"><strong aria-hidden="true">229.</strong> 20251023</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251027.html"><strong aria-hidden="true">230.</strong> 20251027</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251028.html"><strong aria-hidden="true">231.</strong> 20251028</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251029.html"><strong aria-hidden="true">232.</strong> 20251029</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251030.html"><strong aria-hidden="true">233.</strong> 20251030</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251103.html"><strong aria-hidden="true">234.</strong> 20251103</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251104.html"><strong aria-hidden="true">235.</strong> 20251104</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251105.html"><strong aria-hidden="true">236.</strong> 20251105</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251106.html"><strong aria-hidden="true">237.</strong> 20251106</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251107.html"><strong aria-hidden="true">238.</strong> 20251107</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251110.html"><strong aria-hidden="true">239.</strong> 20251110</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251111.html"><strong aria-hidden="true">240.</strong> 20251111</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251112.html"><strong aria-hidden="true">241.</strong> 20251112</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251113.html"><strong aria-hidden="true">242.</strong> 20251113</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251114.html"><strong aria-hidden="true">243.</strong> 20251114</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251117.html"><strong aria-hidden="true">244.</strong> 20251117</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251118.html"><strong aria-hidden="true">245.</strong> 20251118</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251121.html"><strong aria-hidden="true">246.</strong> 20251121</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251125.html"><strong aria-hidden="true">247.</strong> 20251125</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251126.html"><strong aria-hidden="true">248.</strong> 20251126</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251202.html"><strong aria-hidden="true">249.</strong> 20251202</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251203.html"><strong aria-hidden="true">250.</strong> 20251203</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251204.html"><strong aria-hidden="true">251.</strong> 20251204</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251208.html"><strong aria-hidden="true">252.</strong> 20251208</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251209.html"><strong aria-hidden="true">253.</strong> 20251209</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251211.html"><strong aria-hidden="true">254.</strong> 20251211</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251212.html"><strong aria-hidden="true">255.</strong> 20251212</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251216.html"><strong aria-hidden="true">256.</strong> 20251216</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251218.html"><strong aria-hidden="true">257.</strong> 20251218</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251222.html"><strong aria-hidden="true">258.</strong> 20251222</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251225.html"><strong aria-hidden="true">259.</strong> 20251225</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20251226.html"><strong aria-hidden="true">260.</strong> 20251226</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260101.html"><strong aria-hidden="true">261.</strong> 20260101</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260104.html"><strong aria-hidden="true">262.</strong> 20260104</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260105.html"><strong aria-hidden="true">263.</strong> 20260105</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260107.html"><strong aria-hidden="true">264.</strong> 20260107</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260109.html"><strong aria-hidden="true">265.</strong> 20260109</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260112.html"><strong aria-hidden="true">266.</strong> 20260112</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260113.html"><strong aria-hidden="true">267.</strong> 20260113</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260114.html"><strong aria-hidden="true">268.</strong> 20260114</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260115.html"><strong aria-hidden="true">269.</strong> 20260115</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260116.html"><strong aria-hidden="true">270.</strong> 20260116</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260117.html"><strong aria-hidden="true">271.</strong> 20260117</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260120.html"><strong aria-hidden="true">272.</strong> 20260120</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260121.html"><strong aria-hidden="true">273.</strong> 20260121</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260122.html"><strong aria-hidden="true">274.</strong> 20260122</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260123.html"><strong aria-hidden="true">275.</strong> 20260123</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260126.html"><strong aria-hidden="true">276.</strong> 20260126</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260127.html"><strong aria-hidden="true">277.</strong> 20260127</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260128.html"><strong aria-hidden="true">278.</strong> 20260128</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260129.html"><strong aria-hidden="true">279.</strong> 20260129</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="20260130.html"><strong aria-hidden="true">280.</strong> 20260130</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

