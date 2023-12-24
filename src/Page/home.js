import React, { useContext, useState } from "react";
import '../App.css'
import Swal from "sweetalert2";
import { Step, Stepper, Button, StepLabel, Typography, Box, StepContent, Paper } from "@mui/material";
import { userContext } from "../Context/context";
import { updateStep } from "../API/api";
function Home() {
    const {user} = useContext(userContext);
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = async () => {
        const response = await updateStep(user.id, { [`step${activeStep + 1}`]: true })
        if(response) {
            Swal.fire({
                icon: "success",
                title: "Lưu thành công",
                text: 'Hãy di chuyển đến bước tiếp theo!',
              });
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        {
            label: 'Step 1',
            description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM (phát âm tiếng Bồ Đào Nha: [kɾiʃˈtjɐnu ʁɔˈnaldu]; sinh ngày 5 tháng 2 năm 1985) là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha hiện đang thi đấu ở vị trí tiền đạo và là đội trưởng của câu lạc bộ Saudi Pro League Al Nassr và đội tuyển bóng đá quốc gia Bồ Đào Nha.  '
        },
        {
            label: 'Step 2',
            description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM (phát âm tiếng Bồ Đào Nha: [kɾiʃˈtjɐnu ʁɔˈnaldu]; sinh ngày 5 tháng 2 năm 1985) là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha hiện đang thi đấu ở vị trí tiền đạo và là đội trưởng của câu lạc bộ Saudi Pro League Al Nassr và đội tuyển bóng đá quốc gia Bồ Đào Nha.  '

        },
        {
            label: 'Step 3',
            description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM (phát âm tiếng Bồ Đào Nha: [kɾiʃˈtjɐnu ʁɔˈnaldu]; sinh ngày 5 tháng 2 năm 1985) là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha hiện đang thi đấu ở vị trí tiền đạo và là đội trưởng của câu lạc bộ Saudi Pro League Al Nassr và đội tuyển bóng đá quốc gia Bồ Đào Nha.  '

        },
        {
            label: 'Step 4',
            description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM (phát âm tiếng Bồ Đào Nha: [kɾiʃˈtjɐnu ʁɔˈnaldu]; sinh ngày 5 tháng 2 năm 1985) là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha hiện đang thi đấu ở vị trí tiền đạo và là đội trưởng của câu lạc bộ Saudi Pro League Al Nassr và đội tuyển bóng đá quốc gia Bồ Đào Nha.  '

        }
    ]
    return (
        <>
            <div className="Home">
                <div className="title mb-20 mt-30">
                    Xin Chào {user.name},
                </div>
                <Stepper className="" activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 3 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <div>Bạn đã hoàn thành tất cả các chặng, Xin cảm ơn !</div>
                    </Paper>
                )}
            </div>
        </>
    )
}
export default Home;