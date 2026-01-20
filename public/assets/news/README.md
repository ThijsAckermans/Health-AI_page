# News Article Images

Place news article cover images in this folder.

## Folder Structure

Create a subfolder for each article:

```
news/
├── article-slug/
│   └── cover.jpg
├── another-article/
│   └── cover.jpg
└── ...
```

## Specifications

- **Format:** JPG or PNG
- **Size:** 1200x630px recommended (social sharing optimized)
- **File size:** Under 200KB for web performance
- **Filename:** Use `cover.jpg` or `cover.png` inside each article folder

## Reference in Content

In your news markdown file:
```markdown
---
coverImage: "/assets/news/article-slug/cover.jpg"
---
```

## Placeholder Images

Until you have custom images, articles will use placeholder images from `/assets/blog/`.
