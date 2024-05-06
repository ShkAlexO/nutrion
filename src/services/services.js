const apiPosts = "https://64fdb2d8596493f7af7e766e.mockapi.io/blog";

const getPosts = (apiUrl) =>
  fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  });

const heading = {
  features: {
    title: "Features",
    subtitle:
      "Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.",
  },
  lastPosts: {
    title: "Our latest news",
    subtitle:
      "Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.",
  },
  blogPage: {
    title:
      "The Inspiring World of Health: Recipes, Diets, Sports and Vegetarianism",
    subtitle:
      "The Path to Health: Sports, Nutrition and Vegetarianism in One Blog",
  },
};

const features = [
  {
    id: 1,
    icon: "/src/assets/images/features/personalized.png",
    title: "Personalized Nutrition Plans",
    text: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
  },
  {
    id: 2,
    icon: "/src/assets/images/features/guidance.png",
    title: "Guidance from Certified Nutritionists",
    text: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
  },
  {
    id: 3,
    icon: "/src/assets/images/features/food.png",
    title: "Food Tracking and Analysis",
    text: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
  },
  {
    id: 4,
    icon: "/src/assets/images/features/meal.png",
    title: "Meal Planning and Recipes",
    text: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
  },
  {
    id: 5,
    icon: "/src/assets/images/features/lifestyle.png",
    title: "Lifestyle and Behavior Coaching",
    text: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
  },
  {
    id: 6,
    icon: "/src/assets/images/features/nutritional.png",
    title: "Nutritional Education and Workshops",
    text: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
  },
];

// const blog = [
//   {
//     id: 1,
//     image: "/src/assets/images/blog/image-3.jpg",
//     title: "Carbohydrates, Proteins, and Fats",
//     text: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
//   },
//   {
//     id: 2,
//     image: "/src/assets/images/blog/image-2.jpg",
//     title: "Cultivating a Healthy Relationship with Food",
//     text: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being. Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being. Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
//   },
//   {
//     id: 3,
//     image: "/src/assets/images/blog/image-1.jpg",
//     title: "The Benefits of Hydration for Weight Loss",
//     text: "Discover how staying hydrated can support your weight loss goals and improve overall health. And improve overall health.",
//   },
// ];

export { apiPosts, getPosts, heading, features };
