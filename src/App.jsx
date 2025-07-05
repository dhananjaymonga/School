import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, MapPin, Star, Users, Clock, Filter, ChevronDown, Heart, Phone, Globe, Mail, Plus, BookOpen, Award, Calendar, DollarSign, GraduationCap, Menu, X, Home, School, Building, User, Settings, ChevronRight, Upload, Save, Edit3, Trash2, Eye } from 'lucide-react';

// Navigation Component
const Navigation = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'schools', label: 'Schools', icon: School },
    { id: 'colleges', label: 'Colleges', icon: Building },
    { id: 'manual', label: 'College Manual', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">EduPortal</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center px-3 py-2 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-2 rounded-lg transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Homepage Component
const Homepage = () => {
  const [stats, setStats] = useState({
    schools: 0,
    colleges: 0,
    students: 0,
    reviews: 0
  });

  useEffect(() => {
    // Animate counters
    const animateCounter = (target, key) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    animateCounter(2547, 'schools');
    animateCounter(892, 'colleges');
    animateCounter(150000, 'students');
    animateCounter(45000, 'reviews');
  }, []);

  const features = [
    {
      icon: School,
      title: "Comprehensive School Database",
      description: "Access detailed information about thousands of schools with ratings, reviews, and contact details.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Building,
      title: "College Directory",
      description: "Explore colleges and universities with admission requirements, courses, and campus facilities.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "Interactive College Manual",
      description: "Add your own college information and contribute to our growing educational database.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Award,
      title: "Verified Reviews",
      description: "Read authentic reviews from students and parents to make informed decisions.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Educational Path</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the best schools and colleges for your future. Search through thousands of institutions, read reviews, and make informed decisions about your education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Exploring
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.schools.toLocaleString()}</div>
              <div className="text-gray-600">Schools Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{stats.colleges.toLocaleString()}</div>
              <div className="text-gray-600">Colleges & Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{stats.students.toLocaleString()}</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{stats.reviews.toLocaleString()}</div>
              <div className="text-gray-600">Reviews & Ratings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EduPortal?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive tools and resources to help you make the best educational decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students and parents who trust EduPortal for their educational decisions.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

// Lazy loading hook for images
const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
};

// Lazy loading image component
const LazyImage = ({ src, alt, className, placeholder = "bg-gray-200" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = React.useRef();
  const isVisible = useIntersectionObserver(imgRef, { threshold: 0.1 });
  
  return (
    <div ref={imgRef} className={`${className} ${placeholder} overflow-hidden relative`}>
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
        />
      )}
      {isVisible && !isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

// College Manual Component
const CollegeManual = () => {
  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: "Stanford University",
      location: "Stanford, CA",
      type: "Private Research University",
      established: 1885,
      ranking: 3,
      tuition: "$56,169",
      acceptance: "4.3%",
      students: 17249,
      courses: ["Computer Science", "Engineering", "Business", "Medicine"],
      facilities: ["Research Labs", "Library", "Sports Complex", "Student Housing"],
      image: "https://picsum.photos/400/250?random=101",
      description: "Stanford University is a leading research university known for its entrepreneurial spirit and innovation.",
      addedBy: "Admin",
      addedDate: "2024-01-15"
    }
  ]);
  
  const [isAddingCollege, setIsAddingCollege] = useState(false);
  const [editingCollege, setEditingCollege] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    ranking: 0
  });

  const [newCollege, setNewCollege] = useState({
    name: '',
    location: '',
    type: '',
    established: new Date().getFullYear(),
    ranking: 0,
    tuition: '',
    acceptance: '',
    students: 0,
    courses: [],
    facilities: [],
    image: '',
    description: '',
    addedBy: 'User'
  });

  const collegeTypes = [
    'Private Research University',
    'Public Research University',
    'Liberal Arts College',
    'Community College',
    'Technical Institute'
  ];

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !filters.type || college.type === filters.type;
      const matchesLocation = !filters.location || college.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesRanking = !filters.ranking || college.ranking <= filters.ranking;
      
      return matchesSearch && matchesType && matchesLocation && matchesRanking;
    });
  }, [colleges, searchTerm, filters]);

  const handleAddCollege = () => {
    if (newCollege.name && newCollege.location && newCollege.type) {
      const collegeToAdd = {
        ...newCollege,
        id: Date.now(),
        addedDate: new Date().toISOString().split('T')[0],
        image: newCollege.image || `https://picsum.photos/400/250?random=${Date.now()}`
      };
      
      setColleges([...colleges, collegeToAdd]);
      setNewCollege({
        name: '',
        location: '',
        type: '',
        established: new Date().getFullYear(),
        ranking: 0,
        tuition: '',
        acceptance: '',
        students: 0,
        courses: [],
        facilities: [],
        image: '',
        description: '',
        addedBy: 'User'
      });
      setIsAddingCollege(false);
    }
  };

  const handleEditCollege = (college) => {
    setEditingCollege(college.id);
    setNewCollege(college);
  };

  const handleUpdateCollege = () => {
    setColleges(colleges.map(college => 
      college.id === editingCollege ? newCollege : college
    ));
    setEditingCollege(null);
    setNewCollege({
      name: '',
      location: '',
      type: '',
      established: new Date().getFullYear(),
      ranking: 0,
      tuition: '',
      acceptance: '',
      students: 0,
      courses: [],
      facilities: [],
      image: '',
      description: '',
      addedBy: 'User'
    });
  };

  const handleDeleteCollege = (id) => {
    setColleges(colleges.filter(college => college.id !== id));
  };

  const handleArrayInput = (value, field) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setNewCollege(prev => ({ ...prev, [field]: array }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">College Manual</h1>
              <p className="text-gray-600 mt-1">Explore and contribute to our college database</p>
            </div>
            <button
              onClick={() => setIsAddingCollege(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add College
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              {collegeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Max Rank:</label>
              <input
                type="number"
                placeholder="Ranking"
                value={filters.ranking || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, ranking: parseInt(e.target.value) || 0 }))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit College Modal */}
      {(isAddingCollege || editingCollege) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingCollege ? 'Edit College' : 'Add New College'}
                </h2>
                <button
                  onClick={() => {
                    setIsAddingCollege(false);
                    setEditingCollege(null);
                    setNewCollege({
                      name: '',
                      location: '',
                      type: '',
                      established: new Date().getFullYear(),
                      ranking: 0,
                      tuition: '',
                      acceptance: '',
                      students: 0,
                      courses: [],
                      facilities: [],
                      image: '',
                      description: '',
                      addedBy: 'User'
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">College Name *</label>
                    <input
                      type="text"
                      value={newCollege.name}
                      onChange={(e) => setNewCollege(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                    <input
                      type="text"
                      value={newCollege.location}
                      onChange={(e) => setNewCollege(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                    <select
                      value={newCollege.type}
                      onChange={(e) => setNewCollege(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Type</option>
                      {collegeTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Established</label>
                    <input
                      type="number"
                      value={newCollege.established}
                      onChange={(e) => setNewCollege(prev => ({ ...prev, established: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ranking</label>
                    <input
                      type="number"
                      value={newCollege.ranking}
                      onChange={(e) => setNewCollege(prev => ({ ...prev, ranking: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tuition</label>
                    <input
                      type="text"
                      value={newCollege.tuition}
                      onChange={(e) => setNewCollege(prev => ({ ...prev, tuition: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., $50,000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Acceptance Rate</label>
                    <input
                      type="text"
                      value={newCollege.acceptance}
                      onChange={(e) => setNewCollege(prev => ({ ...prev, acceptance: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 15%"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Students</label>
                  <input
                    type="number"
                    value={newCollege.students}
                    onChange={(e) => setNewCollege(prev => ({ ...prev, students: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Courses (comma-separated)</label>
                  <input
                    type="text"
                    value={newCollege.courses.join(', ')}
                    onChange={(e) => handleArrayInput(e.target.value, 'courses')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Computer Science, Engineering, Business"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Facilities (comma-separated)</label>
                  <input
                    type="text"
                    value={newCollege.facilities.join(', ')}
                    onChange={(e) => handleArrayInput(e.target.value, 'facilities')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Library, Sports Complex, Research Labs"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={newCollege.image}
                    onChange={(e) => setNewCollege(prev => ({ ...prev, image: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newCollege.description}
                    onChange={(e) => setNewCollege(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of the college..."
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => {
                    setIsAddingCollege(false);
                    setEditingCollege(null);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={editingCollege ? handleUpdateCollege : handleAddCollege}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {editingCollege ? 'Update College' : 'Add College'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Colleges List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {filteredColleges.length} Colleges Found
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredColleges.map((college) => (
            <div key={college.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <LazyImage
                    src={college.image}
                    alt={college.name}
                    className="w-full h-48 md:h-full"
                    placeholder="bg-gradient-to-br from-blue-100 to-purple-100"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{college.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{college.location}</span>
                      </div>
                      <div className="text-sm text-gray-500">{college.type}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditCollege(college)}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCollege(college.id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Ranking</div>
                      <div className="font-semibold">#{college.ranking}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Students</div>
                      <div className="font-semibold">{college.students.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Tuition</div>
                      <div className="font-semibold">{college.tuition}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Acceptance</div>
                      <div className="font-semibold">{college.acceptance}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{college.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Courses</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.courses.slice(0, 3).map((course, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-2">
                    Added by {college.addedBy} on {college.addedDate}
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
            <button
              onClick={() => setIsAddingCollege(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add First College
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// School Listing Component (simplified version)
const SchoolListing = () => {
  const [schools] = useState([
    {
      id: 1,
      name: "Lincoln Elementary School",
      type: "Public",
      rating: "4.5",
      students: 450,
      grades: "K-5",
      city: "New York",
      state: "NY",
      address: "123 Main Street",
      phone: "(555) 123-4567",
      website: "www.lincoln-elem.edu",
      image: "https://picsum.photos/400/250?random=1",
      description: "Excellence in elementary education with focus on STEM and arts."
    },
    {
      id: 2,
      name: "Washington High School",
      type: "Public",
      rating: "4.2",
      students: 1200,
      grades: "9-12",
      city: "Los Angeles",
      state: "CA",
      address: "456 Oak Avenue",
      phone: "(555) 987-6543",
      website: "www.washington-high.edu",
      image: "https://picsum.photos/400/250?random=2",
      description: "Comprehensive high school education with advanced placement programs."
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">School Directory</h1>
          <p className="text-gray-600">Discover the best schools in your area</p>
        </div>
        
        <div className="space-y-6">
          {schools.map((school) => (
            <div key={school.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <LazyImage
                    src={school.image}
                    alt={school.name}
                    className="w-full h-48 md:h-full"
                    placeholder="bg-gradient-to-br from-green-100 to-blue-100"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{school.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{school.address}, {school.city}, {school.state}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-gray-900">{school.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Type</div>
                      <div className="font-semibold">{school.type}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Grades</div>
                      <div className="font-semibold">{school.grades}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Students</div>
                      <div className="font-semibold">{school.students}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Contact</div>
                      <div className="font-semibold text-blue-600">{school.phone}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{school.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <a href={`tel:${school.phone}`} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        <Phone className="w-4 h-4 mr-1" />
                        <span className="text-sm">Call</span>
                      </a>
                      <a href={`https://${school.website}`} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        <Globe className="w-4 h-4 mr-1" />
                        <span className="text-sm">Website</span>
                      </a>
                    </div>
                    
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// College Listing Component
const CollegeListing = () => {
  const [colleges] = useState([
    {
      id: 1,
      name: "Harvard University",
      location: "Cambridge, MA",
      type: "Private Research University",
      ranking: 1,
      tuition: "$54,269",
      acceptance: "3.4%",
      students: 23000,
      image: "https://picsum.photos/400/250?random=201",
      description: "Harvard University is a prestigious Ivy League institution known for its academic excellence and research contributions."
    },
    {
      id: 2,
      name: "MIT",
      location: "Cambridge, MA",
      type: "Private Research University",
      ranking: 2,
      tuition: "$57,986",
      acceptance: "6.7%",
      students: 11520,
      image: "https://picsum.photos/400/250?random=202",
      description: "Massachusetts Institute of Technology is renowned for its engineering and technology programs."
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">College Directory</h1>
          <p className="text-gray-600">Explore top colleges and universities</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {colleges.map((college) => (
            <div key={college.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <LazyImage
                src={college.image}
                alt={college.name}
                className="w-full h-48"
                placeholder="bg-gradient-to-br from-purple-100 to-pink-100"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{college.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{college.location}</span>
                    </div>
                    <div className="text-sm text-gray-500">{college.type}</div>
                  </div>
                  <div className="bg-purple-100 px-3 py-1 rounded-full">
                    <span className="text-purple-800 font-semibold">#{college.ranking}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Tuition</div>
                    <div className="font-semibold">{college.tuition}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Acceptance</div>
                    <div className="font-semibold">{college.acceptance}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Students</div>
                    <div className="font-semibold">{college.students.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Ranking</div>
                    <div className="font-semibold">#{college.ranking}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{college.description}</p>
                
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Profile Component
const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Student",
    joinDate: "2024-01-15",
    favorites: 5,
    contributions: 3
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
              <p className="text-gray-600">{userProfile.email}</p>
              <p className="text-sm text-gray-500">Member since {userProfile.joinDate}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{userProfile.favorites}</div>
              <div className="text-sm text-gray-600">Favorites</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Plus className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{userProfile.contributions}</div>
              <div className="text-sm text-gray-600">Contributions</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{userProfile.role}</div>
              <div className="text-sm text-gray-600">Role</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Homepage />;
      case 'schools':
        return <SchoolListing />;
      case 'colleges':
        return <CollegeListing />;
      case 'manual':
        return <CollegeManual />;
      case 'profile':
        return <Profile />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {renderContent()}
    </div>
  );
};

export default App;