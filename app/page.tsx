"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Trophy,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Play,
  Target,
  Heart,
  Lightbulb,
  GraduationCap,
  Building,
  Palette,
  Globe,
  Zap,
  Clock,
} from "lucide-react"

export default function RishavClassesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [showMore, setShowMore] = useState({
    achievements: false,
    gallery: false,
    testimonials: false,
    teachers: false,
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [teacherSlide, setTeacherSlide] = useState(0)

  const heroImages = [
    "/rishav-achievement-ceremony.jpg",
    "/rishav-cultural-dance.jpg",
    "/rishav-traditional-costumes.jpg",
    "/rishav-teachers-performance.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLoadMore = (section: keyof typeof showMore) => {
    setShowMore((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setShowBackToTop(window.scrollY > 300)
      setIsNavbarScrolled(scrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const achievements = [
    {
      name: "Aarav Kumar",
      class: "Class 12th",
      year: "2024",
      percentage: "94%",
      description: "Outstanding performance in CBSE Board Examination with distinction in all subjects",
      image: "/boy1.jpg",
    },
    {
      name: "Priya Singh",
      class: "Class 11th",
      year: "2024",
      percentage: "97.2%",
      description: "Exceptional academic excellence and leadership qualities",
      image: "/girl1_image@.jpg",
    },
    {
      name: "Rishav Kumar",
      class: "Class 12th",
      year: "2024",
      percentage: "91%",
      image: "/boy2.jpg",
      description: "Board Exam Topper - First Prize Scholarship Awardee",
    },
    {
      name: "Priya Sharma",
      class: "Class 10th",
      year: "2024",
      percentage: "98%",
      image: "/girl2_image@.jpg",
      description: "Scholarship Awardee - First Prize Winner",
    },
    {
      name: "Arjun Singh",
      class: "Class 12th",
      year: "2023",
      percentage: "90%",
      image: "/boy3.jpg",
      description: "Third Prize Winner - Academic Excellence",
    },
    {
      name: "Ananya Patel",
      class: "Class 9th",
      year: "2024",
      percentage: "96%",
      image: "/girl3_image@.jpg",
      description: "Excellence Award - Outstanding Performance",
    },
    {
      name: "Rohit Gupta",
      class: "Class 11th",
      year: "2023",
      percentage: "94%",
      image: "/boy4.jpg",
      description: "Merit Certificate - Academic Achievement",
    },
  ]

  const galleryItems = [
    {
      src: "/rishav-achievement-ceremony.jpg",
      caption: "Achievement Ceremony - Celebrating Student Success",
      category: "functions",
      type: "image",
    },
    {
      src: "/rishav-cultural-dance.jpg",
      caption: "Cultural Dance Performance by Students",
      category: "festivals",
      type: "image",
    },
    {
      src: "/rishav-traditional-costumes.jpg",
      caption: "Traditional Costume Festival - Krishna Janmashtami",
      category: "festivals",
      type: "image",
    },
    {
      src: "/rishav-teachers-performance.jpg",
      caption: "Teachers Cultural Performance",
      category: "functions",
      type: "image",
    },
    {
      src: "/rishav-student-interaction.jpg",
      caption: "Interactive Learning Session",
      category: "classrooms",
      type: "image",
    },
    {
      src: "/rishav-student-gathering.jpg",
      caption: "Student Gathering and Activities",
      category: "functions",
      type: "image",
    },
    {
      src: "/indian_classroom.jpeg",
      caption: "Modern Classroom Environment",
      category: "classrooms",
      type: "image",
    },
    {
      src: "/indian_school_sports_day.jpg",
      caption: "Annual Sports Day Competition",
      category: "sports",
      type: "image",
    },
    {
      src: "/school-video-thumbnail.jpg",
      caption: "School Introduction Video",
      category: "videos",
      type: "video",
    },
  ]

  const teachers = [
    {
      name: "Chandan Kumar",
      subject: "Founder & Mathematics",
      experience: "5 years",
      image: "/founder.jpg",
      bio: "Expert in advanced mathematics. Specializes in making complex concepts simple.",
    },
    {
      name: "Mrs. Sunita Sharma",
      subject: "English Literature",
      experience: "4 years",
      image: "/female_teacher2.jpg",
      bio: "Masters in English Literature, specializes in creative writing and communication skills development.",
    },
    {
      name: "Mr. Amit Patel",
      subject: "Science & Technology",
      experience: "7 years",
      image: "/teacher2.jpg",
      bio: "MSc in Physics, passionate about experimental learning and hands-on science education.",
    },
    {
      name: "Ms. Kavita Singh",
      subject: "Hindi & Social Studies",
      experience: "8 years",
      image: "/teachers1.jpg",
      bio: "MA in Hindi Literature, expert in classical texts and cultural education programs.",
    },
  ]

  const testimonials = [
    {
      name: "Ramesh Gupta",
      role: "Parent of Rishav Kumar",
      content:
        "Rishav Classes has completely transformed my child's academic journey. The teachers are incredibly dedicated and the learning environment is truly nurturing. My son achieved 95% in his board exams!",
      rating: 5,
    },
    {
      name: "Meera Sharma",
      role: "Class 10 Student",
      content:
        "This is the best coaching institute in our area! I improved my grades significantly and gained so much confidence. The teachers make every subject interesting and easy to understand.",
      rating: 5,
    },
    {
      name: "Vikash Kumar",
      role: "Parent of Priya Sharma",
      content:
        "Excellent teaching methodology and individual attention to each student. The cultural programs along with academics make it a complete learning experience. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Class 8 Student",
      content:
        "The cultural programs and academic excellence make Rishav Classes unique. I love participating in dance performances and festivals while excelling in my studies!",
      rating: 5,
    },
  ]

  const filteredGallery =
    activeTab === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeTab)
  const displayedAchievements = showMore.achievements ? achievements : achievements.slice(0, 6)
  const displayedGallery = showMore.gallery ? filteredGallery : filteredGallery.slice(0, 9)
  const displayedTeachers = showMore.teachers ? teachers : teachers.slice(0, 2)
  const displayedTestimonials = showMore.testimonials ? testimonials : testimonials.slice(0, 2)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length)
      setTeacherSlide((prev) => (prev + 1) % teachers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [achievements.length, teachers.length])

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b" : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className={`h-6 w-6 text-white`} />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"}`}>
                  Rishav Classes
                </h1>
                <p className={`text-sm ${isScrolled ? "text-gray-600" : "text-white/90 drop-shadow-md"}`}>
                  Excellence in Education
                </p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Achievements", "About", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors hover:text-blue-400 ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white drop-shadow-lg hover:text-blue-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        {/* Auto-sliding background images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                onError={(e) => (e.target.src = "/placeholder.svg")}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-32 right-16 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center text-white w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
          <div className="animate-fade-in-up">
            <h1 className="font-bold mb-6 text-balance leading-tight break-words">
              <div className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg font-extrabold">
                WELCOME
              </div>
              <div className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg font-extrabold">
                TO
              </div>
              <div className="mb-4">
                <span
                  className="text-white bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl block"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "white", // Fallback color for better contrast
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)", // Enhanced text shadow for better visibility
                  }}
                >
                  RISHAV CLASSES
                </span>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl block break-words">
                CONCEPT SCHOOL, KIDS ACADEMY & COACHING CENTER
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-balance leading-relaxed text-white/90 max-w-4xl mx-auto break-words">
              Shaping Bright Futures with Knowledge, Discipline & Cultural Values
            </p>

            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 opacity-80 flex flex-col sm:flex-row items-center justify-center gap-2 break-words">
              <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-center sm:text-left">
                Play to 12th (BSEB) AND (CBSE) coaching • Shivpuri, Khalihan per Ramchandrapur Biharsharif (Nalanda
                803101)
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <BookOpen className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                Explore Our Programs
                <Zap className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>

              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <Trophy className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                Admissions Open
                <Heart className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5 text-red-400" />
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10 text-white opacity-70" />
        </div>
      </section>

      <section id="achievements" className="py-32 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 transform -skew-y-2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
              <span className="text-blue-600 font-bold text-xl tracking-wider uppercase">Student Success Stories</span>
              <Trophy className="h-8 w-8 text-yellow-500 ml-3" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proud Achievements
              </span>
              <br />
              <span className="text-gray-800">at Rishav Classes</span>
            </h2>

            <p className="text-xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Celebrating our students' outstanding performance and remarkable success in academics, competitions, and
              personal growth that makes us proud every day
            </p>
          </div>

          {/* Student Success Stories - Mobile/Tablet Carousel */}
          <div className="block md:hidden mb-16">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {achievements.map((achievement, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                      <CardHeader className="text-center pb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative mx-auto mb-4">
                          <img
                            src={achievement.image || "/indian-student-with-certificate.jpg"}
                            alt={achievement.name}
                            className="w-24 h-24 rounded-xl mx-auto object-cover border-3 border-blue-200 shadow-lg"
                          />
                          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full p-2 shadow-lg">
                            <Award className="h-4 w-4" />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-800">{achievement.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                          {achievement.class} • {achievement.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <Badge className="text-lg px-6 py-2 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                          {achievement.percentage}
                        </Badge>
                        <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedAchievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative mx-auto mb-4">
                    <img
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.name}
                      className="w-24 h-24 rounded-xl mx-auto object-cover border-3 border-blue-200 shadow-lg"
                    />
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full p-2 shadow-lg">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">{achievement.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {achievement.class} • {achievement.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Badge className="text-lg px-6 py-2 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                    {achievement.percentage}
                  </Badge>
                  <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => handleLoadMore("achievements")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {showMore.achievements ? "Show Less Achievements" : "View More Success Stories"}
              {showMore.achievements ? (
                <ChevronUp className="ml-3 h-5 w-5" />
              ) : (
                <ChevronDown className="ml-3 h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        {/* Our Vision - Blue diagonal background */}
        <div className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white transform -skew-y-2 mb-20">
          <div className="transform skew-y-2">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-in-left">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-blue-200 mr-3" />
                    <span className="text-blue-200 font-bold text-xl tracking-wider uppercase">Our Vision</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
                    Empowering Future Leaders Through Excellence
                  </h3>

                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    To be the leading educational institution that nurtures young minds, fostering academic excellence,
                    cultural values, and innovative thinking for a brighter tomorrow.
                  </p>
                </div>

                <div className="animate-fade-in-right">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="bg-yellow-400 text-blue-800 p-3 rounded-full">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Academic Excellence</h4>
                        <p className="text-blue-100">
                          Striving for the highest standards in education and character development
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="bg-green-400 text-blue-800 p-3 rounded-full">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Innovation in Learning</h4>
                        <p className="text-blue-100">
                          Modern teaching methods that inspire creativity and critical thinking
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="bg-purple-400 text-blue-800 p-3 rounded-full">
                        <Heart className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Holistic Development</h4>
                        <p className="text-blue-100">Nurturing mind, body, and spirit for well-rounded personalities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission - Purple diagonal background */}
        <div className="relative py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white transform skew-y-2 mb-20">
          <div className="transform -skew-y-2">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-in-right lg:order-2">
                  <div className="flex items-center mb-6">
                    <Zap className="h-8 w-8 text-purple-200 mr-3" />
                    <span className="text-purple-200 font-bold text-xl tracking-wider uppercase">Our Mission</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
                    Transforming Lives Through Quality Education
                  </h3>

                  <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                    To provide comprehensive education that combines academic rigor with cultural enrichment, preparing
                    students to excel in their chosen paths while maintaining strong moral values.
                  </p>
                </div>

                <div className="animate-fade-in-left lg:order-1">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <BookOpen className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                      <h4 className="font-bold text-lg mb-2">Quality Teaching</h4>
                      <p className="text-purple-100 text-sm">Expert faculty with modern methods</p>
                    </div>

                    <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <h4 className="font-bold text-lg mb-2">Student-Centric</h4>
                      <p className="text-purple-100 text-sm">Individual attention and care</p>
                    </div>

                    <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Palette className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                      <h4 className="font-bold text-lg mb-2">Cultural Values</h4>
                      <p className="text-purple-100 text-sm">Preserving traditions and heritage</p>
                    </div>

                    <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Globe className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                      <h4 className="font-bold text-lg mb-2">Global Outlook</h4>
                      <p className="text-purple-100 text-sm">Preparing for the future world</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principal's Message - Cyan diagonal background */}
        <div className="relative py-20 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white transform -skew-y-2">
          <div className="transform skew-y-2">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-cyan-200 mr-3" />
                  <span className="text-cyan-200 font-bold text-xl tracking-wider uppercase">Principal's Vision</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold mb-12 text-balance">A Message from Our Principal</h3>

                <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <img
                        src="/principal.jpg"
                        alt="Principal"
                        className="w-32 h-32 rounded-full border-4 border-cyan-200 shadow-lg"
                      />
                      <div className="text-left">
                        <blockquote className="text-2xl italic mb-6 text-pretty leading-relaxed text-cyan-50">
                          "Education is not just about academic achievement; it's about nurturing the whole child. At
                          Rishav Classes, we believe every student has the potential to excel and make a positive impact
                          on the world."
                        </blockquote>
                        <cite className="font-bold text-xl text-yellow-300">- Khushboo Kumari</cite>
                        <p className="text-cyan-200 mt-2">Principal, Rishav Classes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-blue-600 font-bold text-xl tracking-wider uppercase">About Us</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Rishav Classes
                </span>
              </h2>

              <p className="text-xl mb-6 text-pretty leading-relaxed text-gray-700">
                Established with a vision to provide quality education, Rishav Classes has been nurturing young minds
                for over a decade. We believe in holistic development through academic excellence and cultural
                enrichment.
              </p>

              <p className="text-xl mb-10 text-pretty leading-relaxed text-gray-700">
                Our dedicated faculty and modern teaching methodologies ensure that every student reaches their full
                potential. From Play Group to 12th CBSE and BSEB, we offer comprehensive coaching that prepares students
                for success.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <span className="font-semibold text-lg text-gray-800">
                    Shivpuri, Khalihan per Ramchandrapur Biharsharif (Nalanda 803101)
                  </span>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <a href="tel:7004643684" className="hover:text-blue-600 transition-colors font-semibold text-lg">
                    7004643684, 7645060227
                  </a>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <a
                    href="mailto:rishavcclassess@gmail.com"
                    className="hover:text-blue-600 transition-colors font-semibold text-lg"
                  >
                    rishavcclassess@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                <img
                  src="/front_image.jpg"
                  alt="Rishav Classes Students"
                  className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>

                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Happy Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Palette className="h-8 w-8 text-purple-600 mr-3" />
              <span className="text-purple-600 font-bold text-xl tracking-wider uppercase">Gallery</span>
              <Palette className="h-8 w-8 text-purple-600 ml-3" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Moments of Excellence
              </span>
            </h2>

            <p className="text-xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Capturing precious moments of learning, growth, celebration, and cultural enrichment at Rishav Classes
            </p>
          </div>

          {/* Gallery Tabs - Responsive Design */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {[
              { key: "all", label: "All Photos", icon: "🖼️" },
              { key: "festivals", label: "Festivals", icon: "🎭" },
              { key: "functions", label: "Functions", icon: "🎉" },
              { key: "sports", label: "Sports", icon: "⚽" },
              { key: "classrooms", label: "Classrooms", icon: "📚" },
              { key: "videos", label: "Videos", icon: "🎬" },
            ].map((tab) => (
              <Button
                key={tab.key}
                variant={activeTab === tab.key ? "default" : "outline"}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-2 md:px-8 md:py-4 font-semibold text-sm md:text-lg rounded-full transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                    : "hover:bg-purple-50 hover:border-purple-300"
                }`}
              >
                <span className="mr-1 md:mr-2 text-base md:text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </Button>
            ))}
          </div>

          {/* Gallery Grid - Collage Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {displayedGallery.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onClick={() => setLightboxImage(item.src)}
              >
                {/* Image */}
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.caption}
                  className="w-full h-80 md:h-[26rem] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Video Play Icon */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-10 w-10" />
                    </div>
                  </div>
                )}

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-6 text-lg font-medium leading-relaxed">{item.caption}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-gray-800 capitalize">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => handleLoadMore("gallery")}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {showMore.gallery ? "Show Less Photos" : "Load More Gallery"}
              {showMore.gallery ? <ChevronUp className="ml-3 h-5 w-5" /> : <ChevronDown className="ml-3 h-5 w-5" />}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Services - Orange diagonal background */}
        <div className="relative py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white transform -skew-y-2">
          <div className="transform skew-y-2">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-orange-200 mr-3" />
                  <span className="text-orange-200 font-bold text-xl tracking-wider uppercase">Our Services</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">Comprehensive Educational Programs</h2>

                <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
                  Tailored coaching programs designed to unlock every student's potential and ensure academic success
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: "IIT/PMT Foundation and Coaching Program",
                    description:
                      "Specialized coaching for competitive exams with expert guidance and proven strategies",
                    icon: Trophy,
                    features: ["Expert Faculty", "Mock Tests", "Performance Analysis"],
                  },
                  {
                    title: "Daily Test Program",
                    description: "Regular assessment and progress tracking to ensure continuous improvement",
                    icon: Award,
                    features: ["Daily Assessments", "Progress Reports", "Individual Feedback"],
                  },
                  {
                    title: "Navodya Simurtala Preparation",
                    description: "Focused preparation for Navodaya entrance with comprehensive study material",
                    icon: GraduationCap,
                    features: ["Entrance Coaching", "Study Material", "Success Guarantee"],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-orange-100 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center text-orange-100">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-6 py-2 rounded-full"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-green-600 mr-3" />
              <span className="text-green-600 font-bold text-xl tracking-wider uppercase">Our Facilities</span>
              <Building className="h-8 w-8 text-green-600 ml-3" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                World-Class Infrastructure
              </span>
            </h2>

            <p className="text-xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Modern facilities and resources designed to create an optimal learning environment for our students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Library",
                highlight: "Books & Essential Resources",
                image: "/library_with_students.jpg",
                icon: BookOpen,
              },
              {
                title: "Computer Laboratory",
                highlight: "Latest Technology & Software",
                image: "/computer_lab.webp",
                icon: Globe,
              },
              {
                title: "Clean Campus",
                highlight: "Hygienic & Safe Environment",
                image: "/clean_campus.webp",
                icon: Heart,
              },
              {
                title: "Sports Complex",
                highlight: "Indoor & Outdoor Activities",
                image: "/sports_complex.jpg",
                icon: Trophy,
              },
              {
                title: "Cultural Hall",
                highlight: "Music, Dance & Arts",
                image: "/cultural_hall.jpg",
                icon: Palette,
              },
              {
                title: "Assessment Center",
                highlight: "Modern Testing Facilities",
                image: "/assessment_center.jpg",
                icon: Award,
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-full">
                      <facility.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{facility.title}</h3>
                    <Badge className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 text-sm font-semibold">
                      {facility.highlight}
                    </Badge>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      State-of-the-art facilities designed to enhance the learning experience and support student
                      development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Teachers - Indigo diagonal background */}
        <div className="relative py-20 bg-gradient-to-br from-indigo-600 to-blue-800 text-white transform skew-y-2">
          <div className="transform -skew-y-2">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-indigo-200 mr-3" />
                  <span className="text-indigo-200 font-bold text-xl tracking-wider uppercase">Our Faculty</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">Meet Our Expert Teachers</h2>

                <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
                  Dedicated educators with years of experience, committed to nurturing every student's potential
                </p>
              </div>

              {/* Teachers - Mobile/Tablet Carousel */}
              <div className="block md:hidden mb-12">
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${teacherSlide * 100}%)` }}
                  >
                    {teachers.map((teacher, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                          <CardHeader className="text-center pb-4">
                            <div className="relative mx-auto mb-4">
                              <img
                                src={teacher.image || "/placeholder.svg"}
                                alt={teacher.name}
                                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-200"
                              />
                              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-indigo-800 rounded-full p-2">
                                <GraduationCap className="h-4 w-4" />
                              </div>
                            </div>
                            <CardTitle className="text-xl font-bold text-white">{teacher.name}</CardTitle>
                            <CardDescription className="text-indigo-200 font-medium">{teacher.subject}</CardDescription>
                          </CardHeader>
                          <CardContent className="text-center">
                            <Badge className="bg-yellow-400 text-indigo-800 px-3 py-1 mb-3 font-semibold">
                              {teacher.experience}
                            </Badge>
                            <p className="text-indigo-100 text-sm leading-relaxed">{teacher.bio}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>

                  {/* Carousel indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {teachers.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === teacherSlide ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setTeacherSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {teachers.map((teacher, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="relative mx-auto mb-4">
                        <img
                          src={teacher.image || "/placeholder.svg"}
                          alt={teacher.name}
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-200"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-indigo-800 rounded-full p-2">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white">{teacher.name}</CardTitle>
                      <CardDescription className="text-indigo-200 font-medium">{teacher.subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge className="bg-yellow-400 text-indigo-800 px-3 py-1 mb-3 font-semibold">
                        {teacher.experience}
                      </Badge>
                      <p className="text-indigo-100 text-sm leading-relaxed">{teacher.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={() => handleLoadMore("teachers")}
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {showMore.teachers ? "Show Less Teachers" : "Meet More Faculty"}
                  {showMore.teachers ? (
                    <ChevronUp className="ml-3 h-5 w-5" />
                  ) : (
                    <ChevronDown className="ml-3 h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-pink-600 mr-3" />
              <span className="text-pink-600 font-bold text-xl tracking-wider uppercase">Testimonials</span>
              <Heart className="h-8 w-8 text-pink-600 ml-3" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                What Our Community Says
              </span>
            </h2>

            <p className="text-xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Hear from our students and parents about their transformative experiences at Rishav Classes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {displayedTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Trophy key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <cite className="font-bold text-gray-800 not-italic">{testimonial.name}</cite>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => handleLoadMore("testimonials")}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {showMore.testimonials ? "Show Less Reviews" : "Read More Testimonials"}
              {showMore.testimonials ? (
                <ChevronUp className="ml-3 h-5 w-5" />
              ) : (
                <ChevronDown className="ml-3 h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Contact - Teal diagonal background */}
        <div className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-800 text-white transform -skew-y-2">
          <div className="transform skew-y-2">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-teal-200 mr-3" />
                  <span className="text-teal-200 font-bold text-xl tracking-wider uppercase">Contact Us</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">Schedule Your Visit Today</h2>

                <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
                  Ready to join our educational family? Get in touch with us to learn more about admissions and programs
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Form */}
                <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white text-center">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div>
                        <label className="block text-teal-100 font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-teal-100 font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-teal-100 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-teal-100 font-medium mb-2">Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                          placeholder="Tell us about your requirements..."
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-yellow-400 text-teal-800 hover:bg-yellow-300 font-bold py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <Mail className="mr-3 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>

                    {showSuccess && (
                      <div className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-lg text-center">
                        <p className="text-green-100 font-medium">
                          ✅ Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>

                    <div className="flex items-center gap-4 mb-4">
                      <Phone className="h-6 w-6 text-yellow-400" />
                      <div>
                        <p className="text-white/80 text-lg">Call Us</p>
                        <p className="text-white font-semibold text-xl">+91 7004643684</p>
                        <p className="text-white font-semibold text-xl">+91 7645060227</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <Mail className="h-6 w-6 text-yellow-400" />
                      <div>
                        <p className="text-white/80 text-lg">Email Us</p>
                        <p className="text-white font-semibold text-xl">rishavcclassess@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="h-6 w-6 text-yellow-400" />
                      <div>
                        <p className="text-white/80 text-lg">Visit Us</p>
                        <p className="text-white font-semibold text-xl">Shivpuri, Khalihan per Ramchandrapur</p>
                        <p className="text-white font-semibold text-xl">Biharsharif (Nalanda 803101)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Clock className="h-6 w-6 text-yellow-400" />
                      <div>
                        <p className="text-white/80 text-lg">Office Hours</p>
                        <p className="text-white font-semibold">Monday - Saturday: 6:00 AM - 6:00 PM</p>
                        <p className="text-white font-semibold">Sunday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold mb-6 text-white">Office Hours</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-400 text-teal-800 p-2 rounded-full">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Monday - Saturday</p>
                          <p className="text-white/80">6:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-400 text-teal-800 p-2 rounded-full">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Sunday</p>
                          <p className="text-white/80">10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Rishav Classes</h3>
                  <p className="text-gray-400 text-sm">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Nurturing young minds with quality education, cultural values, and innovative teaching methods for over
                a decade.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About Us", id: "about" },
                  { name: "Achievements", id: "achievements" },
                  { name: "Gallery", id: "gallery" },
                  { name: "Services", id: "services" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Play Group to 12th CBSE</li>
                <li>IIT/PMT Foundation</li>
                <li>Daily Test Program</li>
                <li>Navodaya Simurtala Preparation</li>
                <li>Cultural Programs</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Shivpuri, Khalihan per Ramchandrapur Biharsharif (Nalanda 803101)
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 7004643684
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 7645060227
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  rishavcclassess@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Rishav Classes. All rights reserved. | Shaping futures through quality education.
            </p>
            <p className="text-gray-400">
              Powered By Yuktisoft. | Where Innovation Meets Execution.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-40"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
