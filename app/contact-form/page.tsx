"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

export default function ContactFormPage() {
    const [formData, setFormData] = useState({
        // Personal Information
        fullName: "",
        email: "",
        phone: "",
        company: "",

        // Project Details
        services: [] as string[],
        projectType: "",
        budget: "",
        timeline: "",

        // Additional Information
        projectDescription: "",
        referralSource: "",
        additionalRequirements: "",
    })

    const [submitted, setSubmitted] = useState(false)

    const services = [
        "Data Analysis",
        "Technical Documentation",
        "Full Stack Development",
        "Digital Marketing",
        "UI/UX Design",
        "Mobile App Development",
        "Cloud Solutions",
        "AI/ML Integration",
    ]

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        // Construct a detailed message from all form fields
        const detailedMessage = `
PROJECT REQUEST DETAILS:
------------------------
Company: ${formData.company || 'Not provided'}
Services: ${formData.services.join(', ')}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

PROJECT DESCRIPTION:
${formData.projectDescription}

ADDITIONAL INFO:
Referral Source: ${formData.referralSource || 'Not provided'}
Additional Requirements: ${formData.additionalRequirements || 'None'}
        `.trim()

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: `Project Request: ${formData.services[0] || 'New Project'}`,
                    message: detailedMessage
                }),
            })

            if (response.ok) {
                setSubmitted(true)
                // Reset form after 5 seconds
                setTimeout(() => {
                    setSubmitted(false)
                    setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        company: "",
                        services: [],
                        projectType: "",
                        budget: "",
                        timeline: "",
                        projectDescription: "",
                        referralSource: "",
                        additionalRequirements: "",
                    })
                }, 5000)
            } else {
                const data = await response.json()
                setSubmitStatus({
                    type: 'error',
                    message: data.message || 'Failed to submit request. Please try again.'
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred. Please try again later or contact us directly at primespark.pvt@gmail.com'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center px-4 py-20">
                    <div className="text-center glass rounded-3xl p-12 max-w-2xl">
                        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Thank You!</h1>
                        <p className="text-xl text-muted-foreground mb-6">
                            Your project request has been submitted successfully.
                        </p>
                        <p className="text-lg text-foreground/80">
                            Our team will review your requirements and get back to you within 24 hours.
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 py-24 md:py-32">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <div className="text-center mb-10 md:mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance font-heading">
                            START YOUR <span className="gradient-text">PROJECT</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed normal-case">
                            Tell us about your project and we'll create a customized solution.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                        <div className="space-y-6 md:space-y-8">

                            {/* Personal Information Section */}
                            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">Personal Information</h2>
                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="text-sm sm:text-base text-foreground">Full Name *</Label>
                                        <Input
                                            id="fullName"
                                            placeholder="John Doe"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="bg-background/50 border-border text-foreground h-10 sm:h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm sm:text-base text-foreground">Email Address *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-background/50 border-border text-foreground h-10 sm:h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm sm:text-base text-foreground">Phone Number *</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="bg-background/50 border-border text-foreground h-10 sm:h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-sm sm:text-base text-foreground">Company (Optional)</Label>
                                        <Input
                                            id="company"
                                            placeholder="Your Company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="bg-background/50 border-border text-foreground h-10 sm:h-12"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Services Selection */}
                            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">Services Required *</h2>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    {services.map((service) => (
                                        <div key={service} className="flex items-center space-x-2 sm:space-x-3 glass rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-all">
                                            <Checkbox
                                                id={service}
                                                checked={formData.services.includes(service)}
                                                onCheckedChange={() => handleServiceToggle(service)}
                                                className="border-primary w-4 h-4 sm:w-5 sm:h-5"
                                            />
                                            <Label
                                                htmlFor={service}
                                                className="text-[10px] sm:text-sm font-medium text-foreground cursor-pointer flex-1"
                                            >
                                                {service}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">Project Details</h2>
                                <div className="space-y-6">
                                    {/* Project Type */}
                                    <div className="space-y-3">
                                        <Label className="text-sm sm:text-base text-foreground">Project Type *</Label>
                                        <RadioGroup value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex items-center space-x-2 sm:space-x-3 glass rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-all">
                                                    <RadioGroupItem value="new" id="new" className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <Label htmlFor="new" className="text-[10px] sm:text-sm cursor-pointer flex-1">New Project</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 sm:space-x-3 glass rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-all">
                                                    <RadioGroupItem value="existing" id="existing" className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <Label htmlFor="existing" className="text-[10px] sm:text-sm cursor-pointer flex-1">Enhancement</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 sm:space-x-3 glass rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-all">
                                                    <RadioGroupItem value="consultation" id="consultation" className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <Label htmlFor="consultation" className="text-[10px] sm:text-sm cursor-pointer flex-1">Consultation</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 sm:space-x-3 glass rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-all">
                                                    <RadioGroupItem value="maintenance" id="maintenance" className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <Label htmlFor="maintenance" className="text-[10px] sm:text-sm cursor-pointer flex-1">Maintenance</Label>
                                                </div>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    {/* Budget & Timeline */}
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="budget" className="text-sm sm:text-base text-foreground">Budget Range *</Label>
                                            <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                                                <SelectTrigger className="bg-background/50 border-border text-foreground h-10 sm:h-12 text-xs sm:text-sm">
                                                    <SelectValue placeholder="Select budget" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                                                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                                                    <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                                                    <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                                                    <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="timeline" className="text-sm sm:text-base text-foreground">Timeline *</Label>
                                            <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                                                <SelectTrigger className="bg-background/50 border-border text-foreground h-10 sm:h-12 text-xs sm:text-sm">
                                                    <SelectValue placeholder="Select timeline" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                                                    <SelectItem value="short">Short-term (1 month)</SelectItem>
                                                    <SelectItem value="medium">Medium-term (2-3 months)</SelectItem>
                                                    <SelectItem value="long">Long-term (3-6 months)</SelectItem>
                                                    <SelectItem value="ongoing">Ongoing Project</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <div className="space-y-2">
                                        <Label htmlFor="projectDescription" className="text-sm sm:text-base text-foreground">Project Description *</Label>
                                        <Textarea
                                            id="projectDescription"
                                            placeholder="Tell us about your project goals..."
                                            required
                                            rows={4}
                                            value={formData.projectDescription}
                                            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                                            className="bg-background/50 border-border text-foreground resize-none min-h-[100px] sm:min-h-[150px] text-xs sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">Additional Info</h2>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="referralSource" className="text-sm sm:text-base text-foreground">How did you hear about us?</Label>
                                        <Select value={formData.referralSource} onValueChange={(value) => setFormData({ ...formData, referralSource: value })}>
                                            <SelectTrigger className="bg-background/50 border-border text-foreground h-10 sm:h-12 text-xs sm:text-sm">
                                                <SelectValue placeholder="Select source" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="google">Google Search</SelectItem>
                                                <SelectItem value="social">Social Media</SelectItem>
                                                <SelectItem value="referral">Referral</SelectItem>
                                                <SelectItem value="linkedin">LinkedIn</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="additionalRequirements" className="text-sm sm:text-base text-foreground">Additional Questions</Label>
                                        <Textarea
                                            id="additionalRequirements"
                                            placeholder="Any specific requirements..."
                                            rows={3}
                                            value={formData.additionalRequirements}
                                            onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                                            className="bg-background/50 border-border text-foreground resize-none min-h-[80px] sm:min-h-[100px] text-xs sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col items-center gap-6">
                                {submitStatus.type && (
                                    <div
                                        className={`p-3 sm:p-4 rounded-lg w-full max-w-2xl text-center text-sm sm:text-base ${submitStatus.type === 'success'
                                            ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                                            : 'bg-red-500/20 border border-red-500/50 text-red-300'
                                            }`}
                                    >
                                        {submitStatus.message}
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full sm:w-auto button-3d text-background font-semibold group px-8 sm:px-12 h-11 sm:h-14 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting || formData.services.length === 0 || !formData.projectType || !formData.budget || !formData.timeline}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                    {!isSubmitting && (
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    )
}
