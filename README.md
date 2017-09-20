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

Violet's Houseplant Rescue is a local non-profit organization that rehabilitates and rehomes unwanted or neglected plants. In the last n years, it has grown from a one-person backyard venture into an award-winning garden.  Its website, violethouseplants.com, has also grown over time; pieces have been added bit by bit, but nothing has been removed or reorganized. The current front page is a disorganized collection of articles, action buttons, sponsor links, and images. How can we make the page more effective?

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

The relevance of the written content is not always clear. Some items, such as upcoming events, are clearly dated and placed near the top; other content blocks are undated, and it's not immediately obvious whether it's old news or simply reference material. Separating reference articles from news or updates (and moving or removing "stale" content) would improve the page flow considerably.

The most confusing part of the page is the sidebar, which contains a mix of contact information, social media links, donations, and other advertisements with no clear pattern. As with the written content, the sheer quantity of sidebar links is probably reducing their effectiveness.

## Recommendations

ASK the client to clarify their goal.
"What is the #1 reason for someone to visit your site?"
"Fill in the blank: when a visitor comes to your site, you want them to ____."
Prioritize around that reason.

Simplify, simplify. 
* Most of the content fits neatly into one of the navigation sections, so prioritize which items are critical for the front page, and "re-file" or discard the rest.
* Gather data on which donation options are the most utilized, and move or drop the rest.
* Review social media presence and newsletters; assess which ones can be maintained with current resources. Better to have a couple of high-quality outlets than several stale ones.
* Consolidate the merchandise to its own page.
* Date all new articles.
* ...Or use a CMS and skip all the document management stuff.

## Plan of Action
(Since I'm unable to discuss this directly with the client, I'll have to imagine some answers.)

"The #1 reason for the site is... to arrange and support successful plant adoptions."

"Before adopting, a visitor should search for adoptable plants, find one, and be able to contact us."

"After adopting, a visitor should be able to find solutions to any problems, or contact us if they need additional assistance."

I initially wanted to remove the adoption network link because it looks out of date. However, further research revealed that it automates the creation of adoptable plant profiles, and is thus a great time saver for the client. It stays, though we might move it to a dedicated page.

It would be rather unconventional to use an embedded Facebook plugin in lieu of a news feed, but it does fit the client's current social media usage. If it turns out to be feasible, I might suggest using Facebook and email for time-sensitive news, and putting static content on the rest of the front page.

Outdated news features will be removed.

One of the ads will be removed; the others are required due to active sponsorships.

The footer is currently barely used; we can add contact info, icons, and credits there.

The preceding adjustments resulted in an intermediate content map:
[(Chart 2)](/blueprints/after-box-chart.png)

A mobile-first redesign is in progress. 

### Updated inventory
* Header - name, logo, ~~other graphics~~, contact info
* Nav bar - Adopt, Donate, Volunteer, News, Resources, Success, Contact
* Sidebar - ?
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
* Debate: Bootstrap 4 for no-worry responsiveness, or hand-coded SCSS for customizability?
* Debate: jQuery for quick effects with wide compatibility, or Vue/React for swag?
* Facebook plugin
* Paypal plugin
* Adoption network plugin
* Plant pics from Flickr, with CC attribution

* Issue: the client uses a PHP-based web host with no Node support.
  * Changing or upgrading hosting will be a pain point.
  * Learning PHP/Laravel from square one is beyond the scope of this project.
  * Consider Wordpress if client wants a blog-heavy site.
