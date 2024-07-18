exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
    type MdxFrontmatter {
      backgroundImage: BackgroundImage
    }

    type BackgroundImage {
      srcImage: File @fileByRelativePath
      altText: String
    }
  `);
};

