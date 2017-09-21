# Case study: Pruning an Overgrown Website
1. About
2. Site review
3. Site inventory
4. Analysis
5. Recommendations
6. Plan of action
7. Tools and technologies
8. TBC

## About this project

This study is based on observations from a non-profit site found "in the wild". Identifying details have been changed, but the lessons learned from this project should be widely applicable.

Violet's Houseplant Rescue is a local non-profit organization that rehabilitates and rehomes unwanted or neglected plants. In the last n years, it has grown from a one-person backyard venture into an award-winning garden.  Its website, violethouseplants.com, has also grown over time; pieces have been added bit by bit, but nothing has been removed or reorganized. The current front page is a disorganized collection of articles, action buttons, sponsor links, and images. How can we make the site more effective?

## Site Review

The site is unresponsive to device size, so the majority of this review was at 1920x1080 or 1200x800 resolution. To begin with, I took screenshots of the front page and made a rough content map.
[(Chart 1)](/blueprints/before-box-chart.png)

### Inventory
* Header - name, logo, other graphics, contact info
* Nav bar - News, Adopt, Donate, Volunteer, Resources, Success, Contact
* Sidebar - all the things
* Footer - unused
* News feeds
  * Outdated blog roll
  * Outdated newsletter archive
* Social links
  * Email list opt-in
  * Adoption network plugin
  * Facebook plugin
* Donation buttons
  * Paypal
  * Retail wish list
  * Alt payment method A
  * Alt payment method B
* Merchandise
  * Item A
  * Item B
  * Item C
* Ads
  * Ad A
  * Ad B
  * Ad C

## Analysis
On the plus side, the site branding, contact information, some donation/adoption-related content, and some current events are above the fold. Accompanying photos are generally clear and attractive. However, the index page is more than three screens long, and the content hierarchy is unclear, meaning that much of the content is probably going unread.

Beyond the first couple articles, the age and relevance of the front-page content is unclear. Separating reference articles from news or updates (and moving or removing "stale" content) would improve the page flow considerably.

The most confusing part of the page is the sidebar, which contains a mix of contact information, social media links, donations, and other advertisements with no clear pattern. As with the written content, the sheer quantity of sidebar links is probably reducing their effectiveness.

## Recommendations

Clarify the most important goal of the site with the client.

Simplify, simplify. 
* Prioritize which items are front-page info and move or discard the rest.
* Gather data on which donation options are the most utilized, and move or discard the rest.
* Determine which social media accounts are most effective and/or can be maintained with current resources.
* Consolidate the merchandise to its own page.
* If this page is the main outlet for news updates, consider a CMS such as WordPress.

## Plan of Action
For purposes of this project I will assume the following priorities:

"The #1 reason for the site is... to arrange and support successful plant adoptions." 
"Before adopting, a visitor should search for adoptable plants, find one, and be able to contact us." 
"After adopting, a visitor should be able to find solutions to any problems, or contact us if they need additional assistance." 

The focus will be on the front page for now, though there is plenty of streamlining that could be done on the secondary pages.
The adoption network link is actually part of a system that creates and disseminates ads for each plant. Contrary to my initial impulse, it stays. (I will use a Vue page to emulate this.)

Investigate whether a Facebook plugin will be adequate for event updates.

Remove unused news features and outdated ads.

The footer is currently barely used; we can add contact info, icons, and credits there.

The preceding adjustments resulted in an intermediate content map:
[(Chart 2)](/blueprints/after-box-chart.png)

A mobile-first redesign is in progress. 

### Updated inventory
* Header - name, logo, ~~other graphics~~, contact info
* Nav bar - Adopt, Donate, Volunteer, News, Resources, Success, Contact
* News feeds
  * Use Facebook plugin in lieu of news roll?
* Social links
  * Email list opt-in
  * Adoption network plugin - pointing to self
* Donation buttons
  * Paypal
  * Retail wish list
  * Ad B
* Footer - repeat contact info, social links

## Tools and Technologies
* Pug CLI for templating and generating static HTML files.
* ~~Debate: Bootstrap 4 for no-worry responsiveness, or~~ hand-coded SCSS for customizability, for now.
* Vue for repeating components, e.g., adoption profiles. jQuery for effects.
* Facebook plugin
* Paypal plugin
* Plant pics from Flickr, with CC attribution
* Issue: the client uses a PHP-based web host with little/no Node support.
  * Learning PHP/Laravel (?) from square one is a bit out of scope for this project. 
  * Static pages and Vue for now; keep the templates for later porting to a dynamic setup.
* Not sure if database or authentication is required.
