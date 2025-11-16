import { cn } from "../lib/util";

interface Suggestion {
    type: "good" | "improve";
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
    // Determine gradient and icon based on score
    const gradientClass =
        score > 69
            ? "from-green-100 to-white"
            : score > 49
                ? "from-yellow-100 to-white"
                : "from-red-100 to-white";

    const iconSrc =
        score > 69
            ? "/icons/ats-good.svg"
            : score > 49
                ? "/icons/ats-warning.svg"
                : "/icons/ats-bad.svg";

    return (
        <div
            className={cn(
                "rounded-2xl shadow-md w-full bg-gradient-to-b p-8 flex flex-col gap-6",
                gradientClass
            )}
        >
            {/* Header */}
            <div className="flex flex-row gap-4 items-center">
                <img src={iconSrc} alt="ATS Icon" className="w-10 h-10" />
                <p className="text-2xl font-semibold">ATS Score - {score}/100</p>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
                <p className="font-medium text-xl">
                    How well does your resume pass through Applicant Tracking Systems?
                </p>
                <p className="text-gray-600 text-lg">
                    Your resume was scanned like an employer would. Here's how it performed:
                </p>

                {/* Suggestions */}
                <div className="flex flex-col gap-2 mt-2">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="flex flex-row gap-2 items-center">
                            <img
                                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                                alt={suggestion.type}
                                className="w-4 h-4"
                            />
                            <p className="text-gray-600 text-lg">{suggestion.tip}</p>
                        </div>
                    ))}
                </div>

                <p className="text-gray-600 text-lg mt-2">
                    Want a better score? Improve your resume by applying the suggestions listed above.
                </p>
            </div>
        </div>
    );
};

export default ATS;