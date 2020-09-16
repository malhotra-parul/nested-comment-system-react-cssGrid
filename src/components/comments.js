export const dummyData = {
  title: "Let's start chaining comments!",
  postedBy: "Sourabh",
  comments: [
    {
      id: 1,
      postedBy: "Parul",
      content: "First comment is posted broo!",
      children: [
        {
          id: 2,
          postedBy: "Rahul",
          content: "First child comment!",
          children: [
            {
              id: 6,
              postedBy: "Sushant",
              content: "First child of child comment!",
              children: []
            }
          ]
        },
        {
          id: 3,
          postedBy: "Gaurav",
          content: "Second child comment!",
          children: []
        }
      ]
    },
    {
      id: 4,
      postedBy: "Seema",
      content: "Second Comment in the list!",
      children: []
    },
    {
      id: 5,
      postedBy: "Abhishek",
      content: "Third comment to rescue! Tadaaa...!",
      children: []
    }
  ]
};
