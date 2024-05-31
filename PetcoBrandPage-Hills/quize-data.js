let breadcrumbs = [];
let startOver = 0;
const animals = {
  header: "Which type of pet do you have?",
  type: "animal",
  items: [
    // Cat Items
    {
      id: 1,
      title: "Cat",
      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus-hills-cat",
      altTag: "Cartoon cat plays with ball of yarn",
      breadcrumb: "Pet Specifies",
      breadTagName:
        "sponsoredbrandpage:brandname:producttool:1:catselection:breadcrumbcatselect",
      tagName:
        "sponsoredbrandpage:brandname:producttool:1:catselection:breadcrumbcatselect",
      header: "How old is your cat?",
      type: "button",
      items: [
        // 0–1 year
        {
          id: 2,
          title: "0–1 year",
          breadcrumb: "Year Range",
          breadTagName:
            "sponsoredbrandpage:brandname:producttool:2:breadcrumbtitle:breadcrumb",
          tagName:
            "sponsoredbrandpage:brandname:producttool:2:yearrange0-1:buttonyearrange0-1",
          header: "Are you shopping for dry or wet food?",
          type: "button",
          items: [
            // Dry Food
            {
              id: 3,
              title: "Dry food",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:dryfood:buttondryfood",
              breadcrumb: "Food Type",
              header: "Does your cat have any specific needs?  ",
              items: [
                {
                  title:
                    "Hill's Science Diet Indoor Chicken Recipe Dry Kitten Food, 7 lbs.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336355",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-kitten-food-7-lbs-1336355",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietIndoorChickenRecipeDryKittenFood7lbs:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Chicken Recipe Dry Kitten Food, 15.5 lbs.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2549831",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-chicken-recipe-dry-kitten-food-155-lbs-2549831",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenRecipeDryKittenFood155lbs:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Chicken Recipe Dry Kitten Food, 7 lbs.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336231",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-original-kitten-food-7-lbs-1336231",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenRecipeDryKittenFood7lbs:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Chicken Recipe Dry Kitten Food, 3.5 lbs.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1214098",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-original-kitten-food-35-lbs-1214098",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenRecipeDryKittenFood35lbs:shopnow",
                  cta: "Shop Now",
                },
              ],
            },

            // Wet Food
            {
              id: 5,
              title: "Wet food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:wetfood:buttonwetfood",
              header: "Does your cat have any specific needs?",
              items: [
                {
                  title:
                    "Hill's Science Diet Kitten Healthy Cuisine Roasted Chicken & Rice Medley Canned Wet Cat Food, 2.8 oz.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2504122",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-kitten-healthy-cuisine-roasted-chicken-and-rice-medley-cat-food-28-oz-case-of-24-2504122",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietKittenHealthyCuisineRoastedChickenRiceMedleyCannedWetCatFood28oz:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Kitten Liver & Chicken Entree Canned Wet Cat Food, 2.9 oz.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2690762",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-kitten-liver-and-chicken-entree-canned-wet-cat-food-29-oz-2690762",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietKittenLiverChickenEntreeCannedWetCatFood29oz:shopnow",
                  cta: "Shop Now",
                },

                {
                  title: "Hill's Science Diet Chicken Wet Kitten Food, 2.8 oz.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3153918",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-chicken-wet-kitten-food-28-oz-3153918",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenWetKittenFood28oz:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Kitten Liver & Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_57851",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-liver-and-chicken-entree-canned-kitten-food-57851",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietKittenLiverChickenEntreeCannedWetCatFood55oz:shopnow",
                  cta: "Shop Now",
                },
              ],
            },

            // Both Food
            {
              id: 7,
              title: "Both",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:bothwetanddry:buttonbothwetanddry",
              header: "Does your cat have any specific needs? ",
              items: [
                {
                  title:
                    "Hill's Science Diet Indoor Chicken Recipe Dry Kitten Food, 7 lbs.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336355",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-kitten-food-7-lbs-1336355",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietIndoorChickenRecipeDryKittenFood7lbs:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Chicken Recipe Dry Kitten Food, 15.5 lbs.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2549831",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-chicken-recipe-dry-kitten-food-155-lbs-2549831",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenRecipeDryKittenFood155lbs:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Chicken Recipe Dry Kitten Food, 7 lbs.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336231",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-original-kitten-food-7-lbs-1336231",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenRecipeDryKittenFood7lbs:shopnow",
                  cta: "Shop Now",
                },

                {
                  title:
                    "Hill's Science Diet Kitten Healthy Cuisine Roasted Chicken & Rice Medley Canned Wet Cat Food, 2.8 oz.",
                  img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2504122",
                  link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-kitten-healthy-cuisine-roasted-chicken-and-rice-medley-cat-food-28-oz-case-of-24-2504122",
                  tagName:
                    "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietKittenHealthyCuisineRoastedChickenRiceMedleyCannedWetCatFood28oz:shopnow",
                  cta: "Shop Now",
                },
              ],
            },
          ],
        },

        // 1–6 years
        {
          id: 9,
          title: "1–6 years",
          breadcrumb: "Year Range",
          breadTagName:
            "sponsoredbrandpage:brandname:producttool:2:breadcrumbtitle:breadcrumb",
          tagName:
            "sponsoredbrandpage:brandname:producttool:2:yearrange1-6:buttonyearrange1-6",
          header: "Are you shopping for dry or wet food?",
          type: "button",
          items: [
            // Dry Food
            {
              id: 10,
              title: "Dry food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:dryfood:buttondryfood",
              header: "Does your cat have any specific needs?",
              type: "button",
              items: [
                // WEIGHT
                {
                  id: 11,
                  title: "Weight management",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 3 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266443",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-3-lbs-2266443",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood3lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266435",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-7-lbs-2266435",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Chicken Recipe Dry Cat Food, 4 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_44660",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-light-adult-cat-food-4-lbs-44660",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightChickenRecipeDryCatFood4lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1587838",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-light-adult-cat-food-7-lbs-1587838",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // SKIN
                {
                  id: 12,
                  title: "Skin & coat sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_758027",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-35-lbs-758027",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336304",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-7-lbs-1336304",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DIGESTIVE
                {
                  id: 13,
                  title: "Digestive sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Perfect Digestion Chicken, Barley & Whole Oats Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3229863",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-digestion-chicken-barley-and-whole-oats-recipe-dry-cat-food-35-lbs-3229863",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectDigestionChickenBarleyWholeOatsRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Perfect Digestion Chicken, Barley & Whole Oats Recipe Dry Cat Food, 6 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3229880",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-digestion-chicken-barley-and-whole-oats-recipe-dry-cat-food-6-lbs-3229880",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectDigestionChickenBarleyWholeOatsRecipeDryCatFood6lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_758027",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-35-lbs-758027",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336304",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-7-lbs-1336304",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DENTAL
                {
                  id: 14,
                  title: "Dental",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_802786",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-35-lbs-802786",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336282",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-7-lbs-1336282",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // HAIRBALL
                {
                  id: 15,
                  title: "Hairballs",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedhairballs:buttonhairballs",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Hairball Control Light Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336410",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-hairball-control-light-adult-cat-food-7-lbs-1336410",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHairballControlLightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459042",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-adult-chicken-cat-food-35-lbs-2459042",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459051",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-adult-chicken-cat-food-7-lbs-2459051",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // NONE
                {
                  id: 16,
                  title: "None",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1587854",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-optimal-care-original-adult-cat-food-7-lbs-1587854",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Indoor Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336401",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-adult-cat-food-7-lbs-1336401",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultIndoorChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Indoor Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_628085",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-adult-cat-food-35-lbs-628085",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultIndoorChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Chicken Recipe Dry Cat Food, 4 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_20630",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-optimal-care-original-adult-cat-food-4-lbs-20630",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenRecipeDryCatFood4lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },

            // Wet Food
            {
              id: 17,
              title: "Wet food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:wetfood:buttonwetfood",
              header: "Does your cat have any specific needs?",
              type: "button",
              items: [
                // WEIGHT
                {
                  id: 18,
                  title: "Weight management",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Light Liver & Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_57835",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-light-formula-liver-and-chicken-entree-canned-cat-food-57835",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightLiverChickenEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // SKIN
                {
                  id: 19,
                  title: "Skin & coat sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494202",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-chicken-and-beef-canned-cat-food-28-oz-3494202",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Tuna Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494211",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-salmon-and-tuna-canned-cat-food-28-oz-3494211",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonTunaCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DIGESTIVE
                {
                  id: 20,
                  title: "Digestive sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494202",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-chicken-and-beef-canned-cat-food-28-oz-3494202",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Tuna Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494211",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-salmon-and-tuna-canned-cat-food-28-oz-3494211",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonTunaCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // HAIRBALLS
                {
                  id: 21,
                  title: "Hairballs",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedhairballs:buttonhairballs",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459077",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-chicken-canned-adult-cat-food-case-of-24-29-oz-2459077",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2599141",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-urinary-hairball-control-canned-wet-cat-food-55-oz-2599141",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // NONE
                {
                  id: 22,
                  title: "None",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Savory Salmon Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_933384",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-savory-salmon-entree-canned-cat-food-933384",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSavorySalmonEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Healthy Cuisine Roasted Chicken & Rice Medley Canned Wet Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2504245",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-healthy-cuisine-roasted-chicken-and-rice-medley-cat-food-28-oz-case-of-24-2504245",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyCuisineRoastedChickenRiceMedleyCannedWetCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Chicken Adult Wet Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3153846",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-chicken-adult-wet-cat-food-28-oz-3153846",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenAdultWetCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Ocean Fish Adult Wet Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3153926",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-ocean-fish-adult-wet-cat-food-28-oz-3153926",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietOceanFishAdultWetCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },

            // Both Food
            {
              id: 23,
              title: "Both",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:bothwetanddry:buttonbothwetanddry",
              header: "Does your cat have any specific needs?",
              type: "button",
              items: [
                // WEIGHT
                {
                  id: 24,
                  title: "Weight management",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 3 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266443",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-3-lbs-2266443",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood3lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266435",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-7-lbs-2266435",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Chicken Recipe Dry Cat Food, 4 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_44660",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-light-adult-cat-food-4-lbs-44660",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightChickenRecipeDryCatFood4lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1587838",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-light-adult-cat-food-7-lbs-1587838",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // SKIN
                {
                  id: 25,
                  title: "Skin & coat sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_758027",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-35-lbs-758027",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336304",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-7-lbs-1336304",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DIGESTIVE
                {
                  id: 26,
                  title: "Digestive sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_758027",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-35-lbs-758027",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336304",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-7-lbs-1336304",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      id: 27,
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      id: 28,
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DENTAL
                {
                  id: 29,
                  title: "Dental",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_802786",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-35-lbs-802786",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336282",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-7-lbs-1336282",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // HAIRBALLS
                {
                  id: 30,
                  title: "Hairballs",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedhairballs:buttonhairballs",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459042",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-adult-chicken-cat-food-35-lbs-2459042",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459051",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-adult-chicken-cat-food-7-lbs-2459051",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459077",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-chicken-canned-adult-cat-food-case-of-24-29-oz-2459077",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2599141",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-urinary-hairball-control-canned-wet-cat-food-55-oz-2599141",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // NONE
                {
                  id: 31,
                  title: "None",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1587854",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-optimal-care-original-adult-cat-food-7-lbs-1587854",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Indoor Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336401",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-adult-cat-food-7-lbs-1336401",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultIndoorChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Healthy Cuisine Roasted Chicken & Rice Medley Canned Wet Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2504245",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-healthy-cuisine-roasted-chicken-and-rice-medley-cat-food-28-oz-case-of-24-2504245",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyCuisineRoastedChickenRiceMedleyCannedWetCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Savory Salmon Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_933384",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-savory-salmon-entree-canned-cat-food-933384",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSavorySalmonEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },
          ],
        },

        // 7+ years
        {
          id: 32,
          title: "7+ years",
          breadcrumb: "Year Range",
          breadTagName:
            "sponsoredbrandpage:brandname:producttool:2:breadcrumbtitle:breadcrumb",
          tagName:
            "sponsoredbrandpage:brandname:producttool:2:yearrange7+:buttonyearrange7+",
          header: "Are you shopping for dry or wet food?",
          type: "button",
          items: [
            // Dry Food
            {
              id: 33,
              title: "Dry food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:dryfood:buttondryfood",
              header: "Does your cat have any specific needs?",
              type: "button",
              items: [
                // WEIGHT
                {
                  id: 34,
                  title: "Weight management",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 3 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266443",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-3-lbs-2266443",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood3lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266435",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-7-lbs-2266435",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Chicken Recipe Dry Cat Food, 4 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_44660",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-light-adult-cat-food-4-lbs-44660",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightChickenRecipeDryCatFood4lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1587838",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-light-adult-cat-food-7-lbs-1587838",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // SKIN
                {
                  id: 35,
                  title: "Skin & coat sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_758027",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-35-lbs-758027",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336304",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-7-lbs-1336304",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DIGESTIVE
                {
                  id: 36,
                  title: "Digestive sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3358104",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-cat-food-35-lbs-3358104",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Cat Food, 6 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3358112",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-cat-food-6-lbs-3358112",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryCatFood6lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DENTAL
                {
                  id: 37,
                  title: "Dental",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_802786",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-35-lbs-802786",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336282",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-7-lbs-1336282",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // HAIRBALL
                {
                  id: 38,
                  title: "Hairballs",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedhairballs:buttonhairballs",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Senior 7+ Hairball Control Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_711586",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-hairball-control-senior-cat-food-35-lbs-711586",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7HairballControlChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Hairball Control Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336274",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-hairball-control-senior-cat-food-7-lbs-1336274",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7HairballControlChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // NONE
                {
                  id: 39,
                  title: "None",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Senior 11+ Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1455214",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-age-defying-senior-cat-food-7-lbs-1455214",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior11ChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Indoor Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336258",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-senior-cat-food-7-lbs-1336258",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7IndoorChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 11+ Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1455222",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-age-defying-senior-cat-food-35-lbs-1455222",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior11ChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 11+ Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2166274",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-age-defying-senior-cat-food-7-lbs-2166274",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior11ChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },

            // Wet Food
            {
              id: 40,
              title: "Wet food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:wetfood:buttonwetfood",
              header: "Does your cat have any specific needs?",
              type: "button",
              items: [
                // WEIGHT
                {
                  id: 41,
                  title: "Weight management",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Light Liver & Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_57835",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-light-formula-liver-and-chicken-entree-canned-cat-food-57835",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightLiverChickenEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // SKIN
                {
                  id: 42,
                  title: "Skin & coat sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494202",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-chicken-and-beef-canned-cat-food-28-oz-3494202",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Tuna Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494211",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-salmon-and-tuna-canned-cat-food-28-oz-3494211",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonTunaCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DIGESTIVE
                {
                  id: 43,
                  title: "Digestive sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494202",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-chicken-and-beef-canned-cat-food-28-oz-3494202",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Tuna Canned Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494211",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-salmon-and-tuna-canned-cat-food-28-oz-3494211",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonTunaCannedCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // HAIRBALLS
                {
                  id: 44,
                  title: "Hairballs",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedhairballs:buttonhairballs",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459077",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-chicken-canned-adult-cat-food-case-of-24-29-oz-2459077",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2599141",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-urinary-hairball-control-canned-wet-cat-food-55-oz-2599141",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // NONE
                {
                  id: 45,
                  title: "None",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Senior 7+ Savory Turkey Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2690738",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-savory-turkey-entree-canned-wet-cat-food-29-oz-2690738",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryTurkeyEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Chicken Wet Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3153993",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-7-chicken-wet-cat-food-28-oz-3153993",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenWetCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Tuna Wet Cat Food, 2.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3153934",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-7-tuna-wet-cat-food-28-oz-3153934",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7TunaWetCatFood28oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Chicken and Tuna Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3153969",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-7-chicken-tuna-and-ocean-fish-wet-cat-food-variety-pack-28-oz-3153969",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenandTunaCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },

            // Both Food
            {
              id: 46,
              title: "Both",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:bothwetanddry:buttonbothwetanddry",
              header: "Does your cat have any specific needs?",
              type: "button",
              items: [
                // WEIGHT
                {
                  id: 47,
                  title: "Weight management",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 3 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266443",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-3-lbs-2266443",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood3lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2266435",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-cat-food-7-lbs-2266435",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1587838",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-light-adult-cat-food-7-lbs-1587838",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Light Liver & Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_57835",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-light-formula-liver-and-chicken-entree-canned-cat-food-57835",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightLiverChickenEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // SKIN
                {
                  id: 48,
                  title: "Skin & coat sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_758027",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-35-lbs-758027",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Rice Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336304",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-cat-food-7-lbs-1336304",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRiceRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DIGESTIVE
                {
                  id: 49,
                  title: "Digestive sensitivities",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3358104",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-cat-food-35-lbs-3358104",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Cat Food, 6 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3358112",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-cat-food-6-lbs-3358112",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryCatFood6lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken & Beef and Salmon Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3494229",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-cat-food-variety-pack-28-oz-pack-of-12-3494229",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenBeefandSalmonCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Sensitive Stomach & Skin Chicken & Vegetable Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2678608",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-chicken-and-vegetable-entree-wet-cat-food-29-oz-2678608",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSensitiveStomachSkinChickenVegetableEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // DENTAL
                {
                  id: 50,
                  title: "Dental",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_802786",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-35-lbs-802786",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Oral Care Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336282",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-cat-food-7-lbs-1336282",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // HAIRBALLS
                {
                  id: 51,
                  title: "Hairballs",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneedhairballs:buttonhairballs",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Senior 7+ Hairball Control Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_711586",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-hairball-control-senior-cat-food-35-lbs-711586",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7HairballControlChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Hairball Control Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336274",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-hairball-control-senior-cat-food-7-lbs-1336274",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7HairballControlChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 2.9 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2459077",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-urinary-hairball-control-chicken-canned-adult-cat-food-case-of-24-29-oz-2459077",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood29oz:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Adult Urinary & Hairball Control Savory Chicken Entree Canned Wet Cat Food, 5.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_2599141",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-urinary-hairball-control-canned-wet-cat-food-55-oz-2599141",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultUrinaryHairballControlSavoryChickenEntreeCannedWetCatFood55oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // NONE
                {
                  id: 52,
                  title: "None",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                  breadcrumb: "Special Need",
                  items: [
                    {
                      title:
                        "Hill's Science Diet Senior 7+ Indoor Chicken Recipe Dry Cat Food, 3.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_654515",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-senior-cat-food-35-lbs-654515",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7IndoorChickenRecipeDryCatFood35lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Indoor Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1336258",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-indoor-senior-cat-food-7-lbs-1336258",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7IndoorChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 7+ Chicken and Tuna Canned Cat Food Variety Pack, 2.8 oz., Pack of 12",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_3153969",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-7-chicken-tuna-and-ocean-fish-wet-cat-food-variety-pack-28-oz-3153969",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenandTunaCannedCatFoodVarietyPack28ozPackof12:shopnow",
                      cta: "Shop Now",
                    },

                    {
                      title:
                        "Hill's Science Diet Senior 11+ Chicken Recipe Dry Cat Food, 7 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_cat_1455214",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-age-defying-senior-cat-food-7-lbs-1455214",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior11ChickenRecipeDryCatFood7lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Dog Items
    {
      title: "Dog",
      id: 53,
      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus-hills-dog",
      altTag: "Cartoon dog wags its tail",
      breadcrumb: "Pet Specifies",
      breadTagName:
        "sponsoredbrandpage:brandname:producttool:1:dogselection:breadcrumbdogselect",
      tagName:
        "sponsoredbrandpage:brandname:producttool:1:dogselection:breadcrumbdogselect",
      header: "How old is your dog?",
      type: "button",
      items: [
        // 0–1 year
        {
          id: 54,
          title: "0–1 year",
          breadcrumb: "Year Range",
          breadTagName:
            "sponsoredbrandpage:brandname:producttool:2:breadcrumbtitle:breadcrumb",
          tagName:
            "sponsoredbrandpage:brandname:producttool:2:yearrange0-1:buttonyearrange0-1",
          header: "Are you shopping for dry or wet food?",
          type: "button",
          items: [
            // Dry food
            {
              id: 55,
              title: "Dry food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:dryfood:buttondryfood",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 56,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Small Bites Chicken & Brown Rice Recipe Dry Puppy Food, 4.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1213032",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-small-bites-puppy-food-45-lbs-1213032",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSmallBitesChickenBrownRiceRecipeDryPuppyFood45lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Small Bites Chicken Meal & Barley Recipe Dry Puppy Food, 15.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327518",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-small-bites-puppy-food-155-lbs-1327518",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSmallBitesChickenMealBarleyRecipeDryPuppyFood155lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Puppy Small & Mini Chicken Meal & Brown Rice Recipe Dry Dog Food, 4.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309943",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-small-and-toy-breed-puppy-food-45-lbs-1309943",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySmallMiniChickenMealBrownRiceRecipeDryDogFood45lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Small Paws Chicken Meal, Barley & Brown Rice Recipe Dry Puppy Food, 15.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309927",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-small-and-toy-breed-puppy-food-155-lbs-1309927",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSmallPawsChickenMealBarleyBrownRiceRecipeDryPuppyFood155lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 58,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Chicken Meal & Barley Recipe Dry Puppy Food, 4.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1213059",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-original-puppy-food-45-lbs-1213059",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenMealBarleyRecipeDryPuppyFood45lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Chicken Meal & Barley Recipe Dry Puppy Food, 15.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327534",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-original-puppy-food-155-lbs-1327534",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenMealBarleyRecipeDryPuppyFood155lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet No Corn, Wheat or Soy Chicken Dry Puppy Food, 4 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148959",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-no-corn-wheat-or-soy-chicken-dry-puppy-food-4-lbs-bag-3148959",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietNoCornWheatorSoyChickenDryPuppyFood4lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet No Corn, Wheat or Soy Chicken Dry Puppy Food, 12.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148941",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-no-corn-wheat-or-soy-chicken-dry-puppy-food-125-lbs-bag-3148941",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietNoCornWheatorSoyChickenDryPuppyFood125lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 60,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Chicken & Brown Rice Recipe Large Breed Dry Puppy Food, 15.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327526",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-large-breed-puppy-food-155-lbs-1327526",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenBrownRiceRecipeLargeBreedDryPuppyFood155lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Lamb Meal & Brown Rice Recipe Large Breed Dry Puppy Food, 30 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756508",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-lamb-meal-and-brown-rice-recipe-large-breed-puppy-dry-food-30-lbs-3756508",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietLambMealBrownRiceRecipeLargeBreedDryPuppyFood30lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },

            // Wet food
            {
              id: 62,
              title: "Wet food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:wetfood:buttonwetfood",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 63,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Puppy Savory Stew with Chicken & Vegetables Wet Dog Food, 12.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393061",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-puppy-canned-dog-food-128-oz-case-of-12-393061",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySavoryStewwithChickenVegetablesWetDogFood128oz:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Puppy Small & Mini Savory Stew Chicken & Vegetables Canned Wet Dog Food, 3.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2745541",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-small-and-toy-adult-dog-food-35-oz-tray-2745541",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySmallMiniSavoryStewChickenVegetablesCannedWetDogFood35oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 65,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Puppy Savory Stew with Chicken & Vegetables Wet Dog Food, 12.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393061",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-puppy-canned-dog-food-128-oz-case-of-12-393061",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySavoryStewwithChickenVegetablesWetDogFood128oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 67,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Puppy Savory Stew with Chicken & Vegetables Wet Dog Food, 12.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393061",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-puppy-canned-dog-food-128-oz-case-of-12-393061",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySavoryStewwithChickenVegetablesWetDogFood128oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },

            // Both
            {
              id: 69,
              title: "Both",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:bothwetanddry:buttonbothwetanddry",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 70,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Small Bites Chicken & Brown Rice Recipe Dry Puppy Food, 4.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1213032",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-small-bites-puppy-food-45-lbs-1213032",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSmallBitesChickenBrownRiceRecipeDryPuppyFood45lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Small Bites Chicken Meal & Barley Recipe Dry Puppy Food, 15.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327518",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-small-bites-puppy-food-155-lbs-1327518",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSmallBitesChickenMealBarleyRecipeDryPuppyFood155lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Puppy Small & Mini Chicken Meal & Brown Rice Recipe Dry Dog Food, 4.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309943",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-small-and-toy-breed-puppy-food-45-lbs-1309943",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySmallMiniChickenMealBrownRiceRecipeDryDogFood45lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Puppy Savory Stew with Chicken & Vegetables Wet Dog Food, 12.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393061",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-puppy-canned-dog-food-128-oz-case-of-12-393061",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySavoryStewwithChickenVegetablesWetDogFood128oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 72,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Chicken Meal & Barley Recipe Dry Puppy Food, 4.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1213059",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-original-puppy-food-45-lbs-1213059",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenMealBarleyRecipeDryPuppyFood45lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Chicken Meal & Barley Recipe Dry Puppy Food, 15.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327534",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-development-original-puppy-food-155-lbs-1327534",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenMealBarleyRecipeDryPuppyFood155lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet No Corn, Wheat or Soy Chicken Dry Puppy Food, 12.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148941",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-no-corn-wheat-or-soy-chicken-dry-puppy-food-125-lbs-bag-3148941",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietNoCornWheatorSoyChickenDryPuppyFood125lbs:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Puppy Savory Stew with Chicken & Vegetables Wet Dog Food, 12.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393061",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-puppy-canned-dog-food-128-oz-case-of-12-393061",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySavoryStewwithChickenVegetablesWetDogFood128oz:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 74,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  items: [
                    // NONE
                    {
                      title:
                        "Hill's Science Diet Puppy Savory Stew with Chicken & Vegetables Wet Dog Food, 12.8 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393061",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-puppy-canned-dog-food-128-oz-case-of-12-393061",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySavoryStewwithChickenVegetablesWetDogFood128oz:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Puppy Small & Mini Savory Stew Chicken & Vegetables Canned Wet Dog Food, 3.5 oz.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2745541",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-small-and-toy-adult-dog-food-35-oz-tray-2745541",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietPuppySmallMiniSavoryStewChickenVegetablesCannedWetDogFood35oz:shopnow",
                      cta: "Shop Now",
                    },
                    {
                      title:
                        "Hill's Science Diet Chicken & Brown Rice Recipe Large Breed Dry Puppy Food, 15.5 lbs.",
                      img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327526",
                      link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-large-breed-puppy-food-155-lbs-1327526",
                      tagName:
                        "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietChickenBrownRiceRecipeLargeBreedDryPuppyFood155lbs:shopnow",
                      cta: "Shop Now",
                    },
                  ],
                },
              ],
            },
          ],
        },

        // 1–6 years
        {
          id: 76,
          title: "1–6 years",
          breadcrumb: "Year Range",
          breadTagName:
            "sponsoredbrandpage:brandname:producttool:2:breadcrumbtitle:breadcrumb",
          tagName:
            "sponsoredbrandpage:brandname:producttool:2:yearrange1-6:buttonyearrange1-6",
          header: "Are you shopping for dry or wet food?",
          type: "button",
          items: [
            // Dry food
            {
              id: 77,
              title: "Dry food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:dryfood:buttondryfood",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 78,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // Small WEIGHT
                    {
                      id: 79,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-chicken-recipe-small-bites-dry-dog-food-12-lbs-3756575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Light Small Bites Chicken Meal & Barley Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987208",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-light-small-bites-with-chicken-meal-and-barley-dry-dog-food-15-lbs-bag-2987208",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightSmallBitesChickenMealBarleyDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small & Mini Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2392482",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-small-and-toy-breed-adult-dog-food-4-lbs-2392482",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallMiniChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small & Mini Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2392491",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-small-and-toy-breed-adult-dog-food-15-lbs-2392491",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallMiniChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small SKIN
                    {
                      id: 80,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517951",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-4-lb-bag-2517951",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517943",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-15-lb-bag-2517943",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148772",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148772",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small DIGESTIVE
                    {
                      id: 81,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517951",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-4-lb-bag-2517951",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517943",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-15-lb-bag-2517943",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148772",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148772",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small MOBILITY
                    {
                      id: 82,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small DENTAL
                    {
                      id: 83,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small NONE
                    {
                      id: 84,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Small & Mini Chicken & Brown Rice Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309935",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-small-and-toy-breed-adult-dog-food-155-lbs-1309935",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallMiniChickenBrownRiceRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987195",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-small-bites-with-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987195",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small & Mini Chicken & Brown Rice Recipe Dry Dog Food, 4.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309897",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-small-and-toy-breed-adult-dog-food-45-lbs-1309897",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallMiniChickenBrownRiceRecipeDryDogFood45lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small & Mini Lamb Meal & Brown Rice Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3018169",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-small-paws-lamb-meal-and-brown-rice-recipe-dry-dog-food-155-lbs-bag-3018169",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallMiniLambMealBrownRiceRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 85,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 86,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279261",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-4-lbs-2279261",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279316",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-15-lbs-2279316",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148764",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148764",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-chicken-recipe-small-bites-dry-dog-food-12-lbs-3756575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 87,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148772",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148772",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 88,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148772",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148772",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 89,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 90,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 91,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987195",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-small-bites-with-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987195",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987099",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987099",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_735493",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-advanced-fitness-small-bites-adult-dog-food-5-lbs-735493",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood5lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Lamb Meal & Brown Rice Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327682",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-advanced-fitness-small-bites-lamb-meal-and-rice-adult-dog-food-155-lbs-1327682",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesLambMealBrownRiceRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 92,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 93,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279261",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-4-lbs-2279261",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279316",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-15-lbs-2279316",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 94,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 95,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Digestion Chicken Large Breed Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321379",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-digestion-large-breed-chicken-dry-dog-food-12-lbs-3321379",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectDigestionChickenLargeBreedDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 96,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 97,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 98,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987195",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-small-bites-with-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987195",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987099",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987099",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Recipe Large Breed Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987081",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-large-breed-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987081",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyRecipeLargeBreedDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_735493",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-advanced-fitness-small-bites-adult-dog-food-5-lbs-735493",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood5lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            // Wet food
            {
              id: 99,
              title: "Wet food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:wetfood:buttonwetfood",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 100,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 101,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276908",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-chicken-and-vegetables-canned-adult-dog-food-case-of-12-2276908",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Light Liver Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654485",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-light-savory-liver-entree-canned-dog-food-654485",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultLightLiverCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 102,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 103,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 104,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Small & Mini Chicken & Barley Entree Canned Wet Dog Food, 5.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_992682",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-savory-chicken-entree-canned-dog-food-992682",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallMiniChickenBarleyEntreeCannedWetDogFood58oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Beef & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654434",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-gourmet-beef-entree-canned-dog-food-654434",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultBeefBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654353",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-savory-chicken-entree-canned-dog-food-654353",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Savory Stew with Beef & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393495",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-beef-and-vegetables-adult-canned-dog-food-128-oz-case-of-12-393495",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSavoryStewwithBeefVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 106,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 107,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276908",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-chicken-and-vegetables-canned-adult-dog-food-case-of-12-2276908",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 108,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 109,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 110,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Beef & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654434",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-gourmet-beef-entree-canned-dog-food-654434",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultBeefBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654353",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-savory-chicken-entree-canned-dog-food-654353",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Savory Stew with Chicken & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393240",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-adult-canned-dog-food-128-oz-case-of-12-393240",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSavoryStewwithChickenVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Savory Stew with Beef & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393495",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-beef-and-vegetables-adult-canned-dog-food-128-oz-case-of-12-393495",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSavoryStewwithBeefVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 111,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 112,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276908",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-chicken-and-vegetables-canned-adult-dog-food-case-of-12-2276908",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 113,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 114,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 117,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Beef & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654434",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-gourmet-beef-entree-canned-dog-food-654434",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultBeefBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654353",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-savory-chicken-entree-canned-dog-food-654353",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Savory Stew with Chicken & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393240",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-adult-canned-dog-food-128-oz-case-of-12-393240",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSavoryStewwithChickenVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Savory Stew with Beef & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393495",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-beef-and-vegetables-adult-canned-dog-food-128-oz-case-of-12-393495",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSavoryStewwithBeefVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            // Both
            {
              id: 118,
              title: "Both",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:bothwetanddry:buttonbothwetanddry",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 119,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 120,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small & Mini Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2392491",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-small-and-toy-breed-adult-dog-food-15-lbs-2392491",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallMiniChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-chicken-recipe-small-bites-dry-dog-food-12-lbs-3756575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small & Mini Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2392482",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-small-and-toy-breed-adult-dog-food-4-lbs-2392482",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallMiniChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 121,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517943",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-15-lb-bag-2517943",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517951",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-4-lb-bag-2517951",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 122,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517943",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-15-lb-bag-2517943",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517951",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-4-lb-bag-2517951",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 123,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 124,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 125,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Small & Mini Chicken & Brown Rice Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309935",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-small-and-toy-breed-adult-dog-food-155-lbs-1309935",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallMiniChickenBrownRiceRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987195",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-small-bites-with-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987195",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small & Mini Chicken & Brown Rice Recipe Dry Dog Food, 4.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309897",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-small-and-toy-breed-adult-dog-food-45-lbs-1309897",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallMiniChickenBrownRiceRecipeDryDogFood45lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small & Mini Chicken & Barley Entree Canned Wet Dog Food, 5.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_992682",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-savory-chicken-entree-canned-dog-food-992682",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallMiniChickenBarleyEntreeCannedWetDogFood58oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 126,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 127,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279261",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-4-lbs-2279261",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279316",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-15-lbs-2279316",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-chicken-recipe-small-bites-dry-dog-food-12-lbs-3756575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 128,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 129,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 130,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 131,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 132,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987195",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-small-bites-with-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987195",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987099",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987099",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_735493",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-advanced-fitness-small-bites-adult-dog-food-5-lbs-735493",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood5lbs:shopnow",
                          cta: "Shop Now",
                        },
                        {
                          title:
                            "Hill's Science Diet Adult Beef & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654434",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-gourmet-beef-entree-canned-dog-food-654434",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultBeefBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 133,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 134,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279261",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-4-lbs-2279261",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279316",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-15-lbs-2279316",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276908",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-chicken-and-vegetables-canned-adult-dog-food-case-of-12-2276908",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 135,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 136,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 137,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 138,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 139,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987195",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-small-bites-with-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987195",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987099",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987099",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Chicken & Barley Recipe Large Breed Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987081",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-large-breed-chicken-and-barley-recipe-dry-dog-food-15-lbs-bag-2987081",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultChickenBarleyRecipeLargeBreedDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Small Bites Chicken & Barley Recipe Dry Dog Food, 5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_735493",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-advanced-fitness-small-bites-adult-dog-food-5-lbs-735493",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSmallBitesChickenBarleyRecipeDryDogFood5lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },

        // 7+ years
        {
          id: 140,
          title: "7+ years",
          breadcrumb: "Year Range",
          breadTagName:
            "sponsoredbrandpage:brandname:producttool:2:breadcrumbtitle:breadcrumb",
          tagName:
            "sponsoredbrandpage:brandname:producttool:2:yearrange7+:buttonyearrange7+",
          header: "Are you shopping for dry or wet food?",
          type: "button",
          items: [
            // Dry food
            {
              id: 141,
              title: "Dry food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:dryfood:buttondryfood",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 142,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // Small SKIN
                    {
                      id: 144,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517951",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-4-lb-bag-2517951",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small & Mini Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2517943",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills--science-diet--adult-sensitive-stomach-and-skin-small-and-toy-breed-dog-food-15-lb-bag-2517943",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallMiniChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148772",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148772",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small DIGESTIVE
                    {
                      id: 145,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321395",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-35-lbs-3321395",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321408",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-12-lbs-3321408",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Small Bites Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321424",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-small-bites-chicken-dry-dog-food-12-lbs-3321424",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionSmallBitesChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small MOBILITY
                    {
                      id: 146,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Senior Vitality Small & Mini Chicken & Rice Recipe Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664425",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-35lb-youthful-vitality-small-and-toy-breed-chicken-and-rice-2664425",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7SeniorVitalitySmallMiniChickenRiceRecipeDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Senior Vitality Small & Mini Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664433",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-small-and-toy-breed-chicken-and-rice-2664433",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7SeniorVitalitySmallMiniChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // Small NONE
                    {
                      id: 147,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Senior Vitality Small & Mini Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664433",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-small-and-toy-breed-chicken-and-rice-2664433",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7SeniorVitalitySmallMiniChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Small & Mini Chicken Meal & Brown Rice Recipe Dry Dog Food, 4.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1309900",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-mature-adult-small-and-toy-breed-senior-dog-food-45-lbs-1309900",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7SmallMiniChickenMealBrownRiceRecipeDryDogFood45lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Small & Mini Chicken Meal & Brown Rice Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3018185",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-small-paws-chicken-meal-barley-and-brown-rice-recipe-dry-dog-food-155-lbs-3018185",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7SmallMiniChickenMealBrownRiceRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Small Bites Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987110",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-small-bites-chicken-meal-barley-and-brown-rice-recipe-dry-dog-food-15-lbs-bag-2987110",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SmallBitesChickenMealBarleyBrownRiceRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 148,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 149,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279261",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-4-lbs-2279261",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279316",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-15-lbs-2279316",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148764",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148764",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-chicken-recipe-small-bites-dry-dog-food-12-lbs-3756575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 150,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148772",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-4-lbs-bag-3148772",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 151,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321395",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-35-lbs-3321395",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321408",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-12-lbs-3321408",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Small Bites Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321424",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-small-bites-chicken-dry-dog-food-12-lbs-3321424",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionSmallBitesChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 152,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664441",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-35lb-youthful-vitality-chicken-and-rice-2664441",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 153,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 154,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Senior 7+ Small Bites Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987110",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-small-bites-chicken-meal-barley-and-brown-rice-recipe-dry-dog-food-15-lbs-bag-2987110",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SmallBitesChickenMealBarleyBrownRiceRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Small Bites Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_752525",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-active-longevity-small-bites-senior-dog-food-5-lbs-752525",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SmallBitesChickenMealBarleyBrownRiceRecipeDryDogFood5lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987101",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-chicken-meal-barley-and-brown-rice-recipe-dry-dog-food-15-lbs-bag-2987101",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenMealBarleyBrownRiceRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 155,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // DIGESTIVE
                    {
                      id: 158,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321395",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-35-lbs-3321395",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321408",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-12-lbs-3321408",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 159,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664441",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-35lb-youthful-vitality-chicken-and-rice-2664441",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 160,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 161,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664441",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-35lb-youthful-vitality-chicken-and-rice-2664441",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_37826",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-active-longevity-senior-dog-food-5-lbs-37826",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenMealBarleyBrownRiceRecipeDryDogFood5lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987101",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-chicken-meal-barley-and-brown-rice-recipe-dry-dog-food-15-lbs-bag-2987101",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenMealBarleyBrownRiceRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            // Wet food
            {
              id: 162,
              title: "Wet food",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:wetfood:buttonwetfood",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Small and toy (2–25 lb.)
                {
                  id: 163,
                  title: "Small and toy (2–25 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizesmallandtoy2-25lb.:buttonsmallandtoy2-25lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // SKIN
                    {
                      id: 165,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 166,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 167,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654450",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-savory-chicken-entree-canned-dog-food-654450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Beef & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654469",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-gourmet-beef-entree-canned-dog-food-654469",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7BeefBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Savory Stew with Chicken & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393630",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-mature-adult-canned-dog-food-128-oz-case-of-12-393630",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryStewwithChickenVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Savory Stew with Beef & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393720",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-beef-and-vegetables-mature-adult-canned-dog-food-128-oz-case-of-12-393720",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryStewwithBeefVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Medium (25–50 lb.)
                {
                  id: 168,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 169,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276908",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-chicken-and-vegetables-canned-adult-dog-food-case-of-12-2276908",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 170,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 171,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 172,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654450",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-savory-chicken-entree-canned-dog-food-654450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Beef & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654469",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-gourmet-beef-entree-canned-dog-food-654469",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7BeefBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Savory Stew with Chicken & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393630",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-mature-adult-canned-dog-food-128-oz-case-of-12-393630",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryStewwithChickenVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Savory Stew with Beef & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393720",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-beef-and-vegetables-mature-adult-canned-dog-food-128-oz-case-of-12-393720",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryStewwithBeefVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 173,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 174,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276908",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-chicken-and-vegetables-canned-adult-dog-food-case-of-12-2276908",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 175,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 176,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 177,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654450",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-savory-chicken-entree-canned-dog-food-654450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Beef & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654469",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-gourmet-beef-entree-canned-dog-food-654469",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7BeefBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Savory Stew with Chicken & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393630",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-chicken-and-vegetables-mature-adult-canned-dog-food-128-oz-case-of-12-393630",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryStewwithChickenVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Savory Stew with Beef & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393720",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-beef-and-vegetables-mature-adult-canned-dog-food-128-oz-case-of-12-393720",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryStewwithBeefVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            // Both
            {
              id: 178,
              title: "Both",
              breadcrumb: "Food Type",
              breadTagName:
                "sponsoredbrandpage:brandname:producttool:3:foodtype:breadcrumb",
              tagName:
                "sponsoredbrandpage:brandname:producttool:3:bothwetanddry:buttonbothwetanddry",
              header: "What is your dog’s breed size?",
              type: "button",
              items: [
                // Medium (25–50 lb.)
                {
                  id: 179,
                  title: "Medium (25–50 lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizemedium25-50lb.:buttonmedium25-50lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 180,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279261",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-4-lbs-2279261",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279316",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-15-lbs-2279316",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-chicken-recipe-small-bites-dry-dog-food-12-lbs-3756575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 181,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Salmon & Vegetable Entree Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2276916",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-grain-free-salmon-entree-canned-adult-dog-food-case-of-12-2276916",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSalmonVegetableEntreeCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 182,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321408",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-12-lbs-3321408",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Small Bites Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321424",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-small-bites-chicken-dry-dog-food-12-lbs-3321424",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionSmallBitesChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 183,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664441",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-35lb-youthful-vitality-chicken-and-rice-2664441",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 184,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 185,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Senior 7+ Small Bites Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987110",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-small-bites-chicken-meal-barley-and-brown-rice-recipe-dry-dog-food-15-lbs-bag-2987110",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SmallBitesChickenMealBarleyBrownRiceRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Small Bites Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_752525",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-active-longevity-small-bites-senior-dog-food-5-lbs-752525",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SmallBitesChickenMealBarleyBrownRiceRecipeDryDogFood5lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654450",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-savory-chicken-entree-canned-dog-food-654450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },

                // Large (50+ lb.)
                {
                  id: 186,
                  title: "Large (50+ lb.)",
                  breadcrumb: "Breed Size",
                  breadTagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsize:breadcrumb",
                  tagName:
                    "sponsoredbrandpage:brandname:producttool:4:breedsizelarge50+lb.:buttonsizelarge50+lb.",
                  header: "Does your dog have any specific needs?",
                  type: "button",
                  items: [
                    // WEIGHT
                    {
                      id: 187,
                      title: "Weight management",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedweightmanagement:buttonweightmanagement",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279261",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-4-lbs-2279261",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2279316",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-perfect-weight-adult-dog-food-15-lbs-2279316",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Small Bites Chicken Recipe Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3756575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-chicken-recipe-small-bites-dry-dog-food-12-lbs-3756575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightSmallBitesChickenRecipeDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Perfect Weight Hearty Vegetable & Chicken Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2516449",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-perfect-weight-hearty-vegetable-and-chicken-stew-adult-wet-dog-food-125-oz-2516449",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultPerfectWeightHeartyVegetableChickenStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // SKIN
                    {
                      id: 188,
                      title: "Skin & coat sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedskin&coatsensitivities:buttonskin&coatsensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463560",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dry-dog-food-4-lbs-2463560",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1327755",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-sensitive-stomach-and-skin-adult-dog-food-155-lbs-1327755",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Small Bites Chicken Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3148799",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-and-skin-small-bites-chicken-recipe-dry-dog-food-15-lbs-bag-3148799",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinSmallBitesChickenRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DIGESTIVE
                    {
                      id: 189,
                      title: "Digestive sensitivities",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddigestivesensitivities:buttondigestivesensitivities",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321395",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-35-lbs-3321395",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Perfect Digestion Chicken Dry Dog Food, 12 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_3321408",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-perfect-digestion-chicken-dry-dog-food-12-lbs-3321408",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdult7PerfectDigestionChickenDryDogFood12lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach, Skin Chicken & Vegetable Entree Canned Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987161",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-chicken-and-vegetable-entree-canned-dog-food-128-oz-2987161",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinChickenVegetableEntreeCannedDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Sensitive Stomach & Skin Tender Turkey & Rice Stew Canned Wet Dog Food, 12.5 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987179",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-sensitive-stomach-skin-tender-turkey-and-rice-stew-canned-dog-food-125-oz-2987179",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultSensitiveStomachSkinTenderTurkeyRiceStewCannedWetDogFood125oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // MOBILITY
                    {
                      id: 190,
                      title: "Mobility health",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneedmobilityhealth:buttonmobilityhealth",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2463543",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-4-lbs-2463543",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult Healthy Mobility Small Bites Chicken Meal, Brown Rice & Barley Recipe Dry Dog Food, 15.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_1339575",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-healthy-mobility-small-bites-adult-dog-food-155-lbs-1339575",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultHealthyMobilitySmallBitesChickenMealBrownRiceBarleyRecipeDryDogFood155lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 3.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664441",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-35lb-youthful-vitality-chicken-and-rice-2664441",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood35lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Adult 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // DENTAL
                    {
                      id: 191,
                      title: "Dental",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneeddental:buttondental",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult Oral Care Chicken, Rice & Barley Recipe Dry Dog Food, 4 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_802751",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-oral-care-adult-dog-food-4-lbs-802751",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietAdultOralCareChickenRiceBarleyRecipeDryDogFood4lbs:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },

                    // NONE
                    {
                      id: 192,
                      title: "None",
                      breadTagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneed:breadcrumb",
                      tagName:
                        "sponsoredbrandpage:brandname:producttool:5:specialneednone:buttonnone",
                      breadcrumb: "Special Need",
                      items: [
                        {
                          title:
                            "Hill's Science Diet Adult 7+ Senior Vitality Chicken & Rice Recipe Dry Dog Food, 12.5 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2664450",
                          link: "https://www.petco.com/shop/en/petcostore/product/science-diet-125lb-youthful-vitality-chicken-and-rice-2664450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SeniorVitalityChickenRiceRecipeDryDogFood125lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken Meal, Barley & Brown Rice Recipe Dry Dog Food, 15 lbs.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_2987101",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-adult-7-chicken-meal-barley-and-brown-rice-recipe-dry-dog-food-15-lbs-bag-2987101",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenMealBarleyBrownRiceRecipeDryDogFood15lbs:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Chicken & Barley Entree Canned Wet Dog Food, 13 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_654450",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-senior-savory-chicken-entree-canned-dog-food-654450",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7ChickenBarleyEntreeCannedWetDogFood13oz:shopnow",
                          cta: "Shop Now",
                        },

                        {
                          title:
                            "Hill's Science Diet Senior 7+ Savory Stew with Beef & Vegetables Canned Wet Dog Food, 12.8 oz.",
                          img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_dog_393720",
                          link: "https://www.petco.com/shop/en/petcostore/product/hills-science-diet-savory-stew-with-beef-and-vegetables-mature-adult-canned-dog-food-128-oz-case-of-12-393720",
                          tagName:
                            "sponsoredbrandpage:Hills:producttool:6:HillsScienceDietSenior7SavoryStewwithBeefVegetablesCannedWetDogFood128oz:shopnow",
                          cta: "Shop Now",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let activeItems = animals;

function setActiveItems(index) {
  activeItems = getItemsById(animals, index);
  render();
}

function backToSpecificBreadcrumb(index = null) {
  if (!index) {
    activeItems = animals;
  } else {
    activeItems = getItemsById(animals, index);
  }
  render(false);
}

function getItemsById(item, id) {
  if (item.id === id) {
    return item;
  }

  if (item.items && item.items.length) {
    for (const value of item.items) {
      const result = getItemsById(value, id);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

function findIdByTitle(item, title) {
  if (item.breadcrumb === title) {
    return item.id;
  }

  if (item.items && item.items.length) {
    for (const nestedItem of item.items) {
      const foundId = findIdByTitle(nestedItem, title);
      if (foundId) {
        return foundId;
      }
    }
  }

  return null;
}

function goToInitialState() {
  activeItems = animals;
  breadcrumbs = [];
  render();
  document.querySelector(".bread__container").innerHTML = "";
  document.querySelector("#button-start-over").innerHTML = "";
  startOver = 0;
}

function appendStartOver() {
  document.querySelector("#button-start-over").innerHTML =
    '<button class="reset-search" onclick="goToInitialState(); clickTrackLink(this);" manual_cm_sp="sponsoredbrandpage:brandname:producttool:1:startover:startover">Start Over</button>';
}

//onclik clickTrackLink temporary method, only for testing, prod it will be remove
/*function clickTrackLink(event) {
        console.log('onclick call', event);
    }*/

function render(addBreadcrumb = true) {
  let content = "";
  if (activeItems.breadcrumb) {
    const newBreadcrumb = {
      title: activeItems.breadcrumb,
      visible_title: activeItems.title,
      tagName: activeItems.breadTagName,
      id: activeItems.id,
      is_active: false,
    };
    const bIndex = breadcrumbs.findIndex(
      (value) => value.title === activeItems.breadcrumb
    );
    if (addBreadcrumb) {
      if (bIndex > -1) {
        breadcrumbs.splice(bIndex);
        breadcrumbs[bIndex] = newBreadcrumb;
      } else {
        breadcrumbs.push(newBreadcrumb);
      }
    }
    if (bIndex > -1) {
      breadcrumbs.forEach((item, index) => {
        item.is_active = index === bIndex + 1;
      });
    }
  }
  if (activeItems === animals) {
    breadcrumbs.forEach((item, index) => {
      item.is_active = index === 0;
    });
  }

  breadcrumbRender();

  if (!activeItems.type) {
    let itemsCount = activeItems.items.length;
    activeItems.header =
      "We found {numberOfProduct} that fit your needs.".replace(
        "{numberOfProduct}",
        itemsCount + (itemsCount === 1 ? " product" : " products")
      );
  }

  content += `<h3>${activeItems.header ? activeItems.header : ""}</h3>
                          <div class="search-type">
                              <div class="${
                                activeItems.type === "animal" ? "chose-pet" : ""
                              } ${
    activeItems.type === "button" ? "search-type" : ""
  }  flex-box ${!activeItems.type ? "products-wrapper" : ""}" >`;
  activeItems.items.forEach((item, index) => {
    if (activeItems.type === "animal") {
      content += `<a onclick="setActiveItems(${item.id}); clickTrackLink(this);" manual_cm_sp="${item.tagName}" href="#" class="flex-box">
                                                      <img src="${item.img}" alt="${item.altTag}">
                                                      <button >${item.title}</button>`;
      content += index === 0 ? `</a><span>OR</span>` : "";
    } else if (activeItems.type === "button") {
      content += `<button onclick="setActiveItems(${item.id}); clickTrackLink(this);" manual_cm_sp="${item.tagName}" class="search-type-btn">${item.title}</button>`;
    } else {
      content += `<a   onclick="clickTrackLink(this)" href="${item.link}" manual_cm_sp="${item.tagName}" class="flex-box">
                                          <img src="${item.img}" >
                                              <p>${item.title}</p>
                                              <div class="cta-underline">${item.cta}</div>
                                      </a>`;
    }
  });
  content += ` </div>
                          </div>`;
  document.querySelector(".search_content").innerHTML = content;
}

////breadcrumb initial render
function breadcrumbRender() {
  let breadcrumb = "";
  if (breadcrumbs && breadcrumbs.length) {
    if (!startOver) {
      startOver = 1;
      appendStartOver();
    }
    breadcrumbs.forEach((bread, index) => {
      let breadIndex = bread.id;
      if (index) {
        breadIndex = breadcrumbs[index - 1].id;
        breadcrumb += `<button onclick="backToSpecificBreadcrumb(${breadIndex}); clickTrackLink(this);" manual_cm_sp="${
          bread.tagName
        }" class="bread_btn ${
          bread.is_active ? "btn-active" : ""
        }" onclick="showContent(event, 'tab-content')" id="defaultOpen">${
          bread.visible_title
        }<img src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_edit"><img src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_edit-white" class="hide-img"></button>`;
      } else {
        breadcrumb += `<button onclick="backToSpecificBreadcrumb(0); clickTrackLink(this);" class="bread_btn ${
          bread.is_active ? "btn-active" : ""
        }" onclick="showContent(event, 'tab-content')" manual_cm_sp="${
          bread.tagName
        }" id="defaultOpen">${
          bread.visible_title
        }<img src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_edit"><img src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/citrus_hills_edit-white" class="hide-img"></button>`;
      }
    });
    document.querySelector(".bread__container").innerHTML = breadcrumb;
  }
}

//very initial render
render();
