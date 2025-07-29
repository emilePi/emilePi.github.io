---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Stochastic super-resolution for Gaussian microtextures"
authors: ["admin", "Bruno Galerne"]
date: 2025-04-10

# Schedule page publish date (NOT publication's date).
publishDate: 2025-04-10

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "SIIMS journal"
publication_short: ""

abstract: "Super-Resolution (SR) is the problem that consists in reconstructing images that have been degraded by a zoom-out operator. This is an ill-posed problem that does not have a unique solution, and numerical approaches rely on a prior on high-resolution images. 
While optimization-based methods are generally deterministic, with the rise of image generative models more and more interest has been given to stochastic SR, that is, sampling among all possible SR images associated with a given low-resolution input.
In this paper, we construct an efficient, stable and provably exact sampler for the stochastic SR of Gaussian microtextures. 
Even though our approach is limited regarding the scope of images it encompasses, our algorithm is competitive with deep learning state-of-the-art methods both in terms of perceptual metric and execution time when applied to microtextures. 
The framework of Gaussian microtextures also allows us to rigorously discuss the limitations of various reconstruction metrics to evaluate the efficiency of SR routines."

# Summary. An optional shortened abstract.
summary: ""

tags: ["stochastic super-resolution",
"Gaussian textures", 
"conditional simulation", 
"kriging",
"super-resolution with a reference image"]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://hal.science/hal-04560456v3
url_code: https://github.com/emilePi/Stochastic_SR_for_Gaussian_textures
#url_dataset: 
url_poster: files/Poster_ICASSP_2023.pdf
#url_project:
#url_slides: talk/yale-biostats-2020/slides.pdf
#url_source:
#url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false
  width: 1720

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects: ["covid-19"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
