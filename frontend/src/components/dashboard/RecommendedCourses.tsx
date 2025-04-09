
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RecommendedCourse {
  id: string;
  title: string;
  image: string;
  lessons: number;
  duration: string;
  price: string;
}

const recommendedCourses: RecommendedCourse[] = [
  {
    id: "1",
    title: "Data Science",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    lessons: 22,
    duration: "3 months",
    price: "₹ 2499"
  },
  {
    id: "2",
    title: "UI/UX Pro",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    lessons: 20,
    duration: "2 months",
    price: "₹ 2799"
  },
  {
    id: "3",
    title: "IoT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    lessons: 28,
    duration: "3 months",
    price: "₹ 1350"
  },
  {
    id: "4",
    title: "Advanced ML",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    lessons: 36,
    duration: "4 months",
    price: "₹ 3750"
  }
];

const RecommendedCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const visibleCourses = recommendedCourses.slice(currentIndex, currentIndex + 4);
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recommendations for you</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleCourses.map((course) => (
          <Card 
            key={course.id} 
            className="glass-card overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>{course.lessons} lessons</span>
                <span>{course.duration}</span>
              </div>
              <Button 
                className="w-full bg-pink-400 hover:bg-pink-500 text-white"
              >
                Buy {course.price}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
