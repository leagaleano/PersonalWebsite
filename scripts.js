document.addEventListener("DOMContentLoaded", function() {
    const terminalContent = document.getElementById('terminal-content');
    let currentCommandEl = document.getElementById('current-command');
    let currentCommand = '';
    let commandHistory = [];
    let historyIndex = -1;
    
    const commands = [
        'Get-Experience', 
        'Get-Skills', 
        'Get-Education', 
        'Get-Contact', 
        'Get-Projects', 
        'Clear-Host', 
        'cls',
        'Download-Resume',
        'Run-Coffee.ps1',
        'Get-Help',
        'help'
    ];

    // Function to add a new line to the terminal
    function addLine(text, className = '') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        if (className) line.classList.add(className);
        line.textContent = text;
        terminalContent.insertBefore(line, terminalContent.lastElementChild);
    }

    // Function to add a command prompt line for the next input
    function addPromptLine() {
        const line = document.createElement('div');
        line.className = 'terminal-line input-line';
        line.innerHTML = '<span class="prompt">PS C:\\Users\\Visitor> </span><span id="current-command"></span><span class="cursor"></span>';
        terminalContent.appendChild(line);
        terminalContent.removeChild(terminalContent.lastElementChild.previousElementSibling);
        // Update the reference to the new current-command element
        currentCommandEl = document.getElementById('current-command');
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    // Process the command and display results
    function processCommand(cmd) {
        // Remove current input line
        terminalContent.removeChild(terminalContent.lastElementChild);
        
        // Add executed command as a line
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `<span class="prompt">PS C:\\Users\\Visitor> </span>${cmd}`;
        terminalContent.appendChild(commandLine);
        
        // Add to history
        if (cmd.trim() !== '') {
            commandHistory.unshift(cmd);
            historyIndex = -1;
        }
        
        const lowerCmd = cmd.toLowerCase().trim();
        
        // Process command
        if (lowerCmd === 'get-experience') {
            addLine('PROFESSIONAL EXPERIENCE:', 'success');
            addLine('SENIOR SYSTEM ENGINEER - DEVOPS. EPAM SPAIN.');
            addLine('Aug 2022 – Present');
            addLine('As a DevOps Engineer on one of EPAM\'s largest customer projects, I played a crucial role in delivering a highly resilient and agile infrastructure to support Development and QA teams.');
            
            addLine('CLOUD MIGRATION SPECIALIST. MICROSTRATEGY.');
            addLine('May 2022 – Aug 2022');
            addLine('I assisted customers in modernizing their consumption of MicroStrategy products by migrating from on-premises servers to fully managed cloud platforms on AWS or Azure.');
            
            addLine('IT CONSULTANT. FREELANCE.');
            addLine('Mar 2020 – Aug 2022');
            addLine('I successfully provided consultation services for the company\'s transition to Azure cloud, including capacity assessment, documentation, and implementation of the best fitting approach.');
        }
        else if (lowerCmd === 'get-skills') {
            addLine('SKILLS:', 'success');
            addLine('CLOUD & INFRASTRUCTURE:');
            addLine('- Azure, AWS, VMWare, Hyper-V');
            addLine('- Windows Server 2008 R2 and newer');
            addLine('- Red Hat Enterprise Linux and Ubuntu Server');
            
            addLine('DEVELOPMENT & AUTOMATION:');
            addLine('- PowerShell, VBScript, Python');
            addLine('- Docker, Docker-Compose, Kubernetes');
            addLine('- Infrastructure-as-Code');
            
            addLine('MANAGEMENT & COMPLIANCE:');
            addLine('- ITIL, Six Sigma, HIPAA, GDPR, PCI compliance');
            addLine('- Leadership and contractor management');
            addLine('- Microsoft System Center suite (SCOM, SCCM, SCSM, Orchestrator)');
        }
        else if (lowerCmd === 'get-education') {
            addLine('EDUCATION:', 'success');
            addLine('INSTITUTO SUPERIOR PARTICULAR INCORPORADO Nº 4011 "GRAL. MANUEL BELGRANO"');
            addLine('System Analyst Degree. 3 credits left to completion.');
            
            addLine('ESCUELA MEDIA PARTICULAR INCORPORADA N° 3105 "SANTA TERESITA DEL NIÑO JESÚS".');
            addLine('Humanities and Social Sciences Degree.');
        }
        else if (lowerCmd === 'get-contact') {
            addLine('CONTACT INFORMATION:', 'success');
            addLine('Location: Málaga (29006), Spain');
            addLine('Phone: +34 617 56 09 17');
            addLine('Email: leandro.galeano@live.com');
            addLine('LinkedIn: https://www.linkedin.com/in/leandro-galeano');
            addLine('Badges: https://www.youracclaim.com/users/leandro-galeano/badges');
        }
        else if (lowerCmd === 'get-projects') {
            addLine('HIGHLIGHTED PROJECTS:', 'success');
            addLine('AZURE CLOUD MIGRATION (2020-2022):');
            addLine('- Successfully migrated two core services and a testing/lab environment from physical hardware to Azure IaaS and PaaS');
            addLine('- Implemented automation using PowerShell for repetitive server maintenance tasks');
            
            addLine('DEVOPS INFRASTRUCTURE IMPROVEMENT (2022-Present):');
            addLine('- Delivered highly resilient and agile infrastructure using WinOps toolset');
            addLine('- Implemented cutting-edge security tools like Ilumio and CyberArk');
            
            addLine('CLOUD MIGRATION AUTOMATION (2022):');
            addLine('- Developed solution to replace third-party paid software with open-source products and custom scripts');
            addLine('- Created easy and user-friendly access to AWS S3 or Azure blob storage on Windows');
        }
        else if (lowerCmd === 'clear-host' || lowerCmd === 'cls') {
            // Clear terminal except the header
            while (terminalContent.childElementCount > 1) {
                terminalContent.removeChild(terminalContent.firstElementChild);
            }
            addLine('Microsoft Windows [Version 10.0.19044.3803]');
            addLine('(c) Microsoft Corporation. All rights reserved.');
            addLine('Starting PowerShell session for Leandro Galeano\'s CV...');
            addLine('Type Get-Help to see available commands.', 'success');
        }
        else if (lowerCmd === 'download-resume') {
            addLine('Initiating download of resume...', 'success');
            addLine('Note: This is a simulation. In a real implementation, this would download the actual PDF resume.');
        }
        else if (lowerCmd === 'run-coffee.ps1') {
            addLine('☕ Brewing virtual coffee... ☕', 'success');
            addLine('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
            addLine('░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░');
            addLine('░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░');
            addLine('░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░');
            addLine('░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░');
            addLine('░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░');
            addLine('░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░');
            addLine('░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░');
            addLine('░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░');
            addLine('░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░');
            addLine('░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░');
            addLine('░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░');
            addLine('░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░');
            addLine('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
            addLine('Coffee break activated! Sometimes the best solutions come during a coffee break.');
        }
        else if (lowerCmd === 'help' || lowerCmd === 'get-help') {
            addLine('NAME', 'success');
            addLine('    CV - Interactive Curriculum Vitae for Leandro Galeano');
            addLine('SYNOPSIS', 'success');
            addLine('    Explore Leandro Galeano\'s professional experience, skills, and background.');
            addLine('COMMANDS', 'success');
            addLine('    Get-Experience        : Display professional experience');
            addLine('    Get-Skills            : List technical skills and proficiencies');
            addLine('    Get-Education         : Show educational background');
            addLine('    Get-Contact           : Display contact information');
            addLine('    Get-Projects          : View highlighted projects');
            addLine('    Clear-Host or cls     : Clear terminal screen');
            addLine('    Download-Resume       : Download full resume as PDF');
            addLine('    Run-Coffee.ps1        : Take a coffee break!');
        }
        else if (lowerCmd === '') {
            // Do nothing for empty command
        }
        else {
            addLine(`The term '${cmd}' is not recognized as a cmdlet, function, script file, or operable program.`, 'error');
            addLine('Type "Get-Help" to see available commands.', 'error');
        }
        
        // Add new prompt line
        addPromptLine();
    }

    // Autocomplete functionality
    function autocomplete(text) {
        if (!text) return null;
        
        const matches = commands.filter(cmd => 
            cmd.toLowerCase().startsWith(text.toLowerCase())
        );
        
        if (matches.length === 1) {
            return matches[0];
        }
        
        return null;
    }

    // Handle keyboard input
    document.addEventListener('keydown', function(e) {
        // Only process input when not on mobile
        if (window.innerWidth <= 768) return;
        
        if (e.key === 'Enter') {
            const cmd = currentCommandEl.textContent;
            processCommand(cmd);
            currentCommand = '';
            e.preventDefault();
        } 
        else if (e.key === 'Backspace') {
            if (currentCommandEl.textContent.length > 0) {
                currentCommandEl.textContent = currentCommandEl.textContent.slice(0, -1);
                currentCommand = currentCommandEl.textContent;
            }
            e.preventDefault();
        } 
        else if (e.key === 'ArrowUp') {
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                historyIndex++;
                currentCommandEl.textContent = commandHistory[historyIndex];
            }
            e.preventDefault();
        } 
        else if (e.key === 'ArrowDown') {
            if (historyIndex > 0) {
                historyIndex--;
                currentCommandEl.textContent = commandHistory[historyIndex];
            } else if (historyIndex === 0) {
                historyIndex = -1;
                currentCommandEl.textContent = '';
            }
            e.preventDefault();
        } 
        else if (e.key === 'Tab') {
            const completed = autocomplete(currentCommandEl.textContent);
            if (completed) {
                currentCommandEl.textContent = completed;
            }
            e.preventDefault();
        } 
        else if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
            currentCommandEl.textContent += e.key;
            currentCommand = currentCommandEl.textContent;
        }
    });
    
    // Make terminal section clickable to focus
    terminalContent.addEventListener('click', function() {
        // Visual indication that terminal is focused (optional)
        terminalContent.style.outline = "none";
        // Focus on the document to capture keystrokes
        document.body.focus();
    });
    
    // Handle download resume click
    document.getElementById('download-resume').addEventListener('click', function(e) {
        e.preventDefault();
        alert('This would download the resume PDF in a real implementation.');
    });
    
    // Make the terminal content area focusable
    terminalContent.setAttribute('tabindex', '0');
    
    // Initial focus on terminal
    terminalContent.focus();
});