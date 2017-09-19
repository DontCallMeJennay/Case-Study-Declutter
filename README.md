# Case study: Pruning an Overgrown Website

## About this project
	This study is based on observations from a non-profit site found "in the wild". Identifying details have been changed for privacy reasons, but the lessons learned from this project should be widely applicable.

	Violet's Houseplant Rescue is a local non-profit organization that rehabilitates and rehomes unwanted or neglected plants. In the last n years, it has grown from a one-person backyard venture into an award-winning garden.  Its website, violethouseplants.com, has also grown over time; pieces have been added bit by bit, but it appears the content has not been reviewed or reorganized. Today, the front page is an overwhelming collection of articles, action buttons, sponsor links, and images.

## Site Review

	The majority of this review was at 1920x1080 or 1200x800 resolution, as the site was unresponsive to phone-size screens. To begin with, I took screenshots of the front page and made a rough content map.
	[(Chart)](before-box-chart.png)

### Inventory
* Header - name, logo, other graphics, contact info
* Nav bar - Adopt, Donate, Volunteer, News, Resources, Success, Contact
* Sidebar - 
* Footer - unused
* News feeds
 * Outdated news roll
 * Outdated newsletter archive
* Social links
 * Email list opt-in
 * Adoption network plugin - pointing to self
 * Facebook plugin - inconsistently working
 * No Twitter?
 * Event list - blank
* Donation buttons
 * Paypal
 * Alt payment method A
 * Alt payment method B
 * Retail wish list
* Merchandise
 * Item A
 * Item B
* Ads
 * Ad A
 * Ad B
 * Ad C

## Analysis
	On the plus side, the site branding, contact information, some donation/adoption-related content, and some current events are above the fold. Accompanying photos are generally clear and attractive. However, the index page is more than three screens long, and the content hierarchy is unclear, meaning that much of the content is probably going unread.

	In the written content, uneven content age is a particularly noticeable issue. Some items, such as upcoming events, are clearly dated and placed near the top; other content blocks are undated, and it is unclear whether it's old news or simply reference material that doesn't need to be dated. Separating reference articles from news or updates (and moving or removing "stale" content) would improve the page flow considerably.

	The most confusing part of the page is the sidebar, which contains a mix of contact information, social media links, donations, and other advertisements with no clear pattern. As with the written content, the sheer quantity of sidebar links is probably reducing their effectiveness.

## Recommendations
	ASK the client to clarify their goal.
	"What is the #1 reason for someone to visit your site?"
	"Fill in the blank: when a visitor comes to your site, you want them to _____."
	Prioritize around that one reason.

	Simplify, simplify. 
	* Most of the content fits neatly into one of the navigation sections, so prioritize which items are critical for the front page, and "re-file" or discard the rest.
	* Gather data on which donation options are the most utilized, and move or drop the rest.
	* Review social media presence and newsletters; assess which ones can be maintained with current resources. Better to have a couple of high-quality outlets than several stale ones.
	* Consolidate the merchandise to its own page.
	* Date all new articles.

## Plan of Action

## Tools and Technologies
* Pug CLI for templating and generating static HTML files.
* The client uses a PHP-based web host with no Node support.
 * They may not be willing to change or upgrade their hosting.
 * Learning PHP/Laravel from square one is beyond the scope of this project.
 * Consider WordPress or another CMS if client expects to write frequent updates.