document.addEventListener('DOMContentLoaded', () => {

    let buttons = document.querySelectorAll('.navbutton')
    let dd1 = document.querySelector('.dd1c')
    let dd2 = document.querySelector('.dd2c')
    let dd3 = document.querySelector('.dd3c')
    let dd4 = document.querySelector('.dd4c')
    let dropdown1Expanded = false
    let dropdown2Expanded = false
    let dropdown3Expanded = false
    let dropdown4Expanded = false
    let ddcDrop = dd1.querySelector('.ddcdrop');
    let ddcDrop2 = dd2.querySelector('.ddcdrop');
    let ddcDrop3 = dd3.querySelector('.ddcdrop');
    let ddcDrop4 = dd4.querySelector('.ddcdrop');
    
    let ddcDrop1p1 = document.createElement('p')
    let ddcDrop1p2 = document.createElement('p')
    let ddcDrop1p3 = document.createElement('p')
    let ddcDrop1p4 = document.createElement('p')
    let ddcDrop1p5 = document.createElement('p')
    
    let ddcDrop2h21 = document.createElement('h2')
    let ddc2Ol1 = document.createElement('ol')
    let ddc2li1 = document.createElement('li')
    let ddc2li2 = document.createElement('li')
    let ddcDrop2h22 = document.createElement('h2')
    let ddc2Ol2 = document.createElement('ol')
    let ddc2li3 = document.createElement('li')
    let ddc2li4 = document.createElement('li')
    let ddcDrop2h23 = document.createElement('h2')
    let ddc2Ol3 = document.createElement('ol')
    let ddc2li5 = document.createElement('li')
    let ddc2li6 = document.createElement('li')
    let ddcDrop2h24 = document.createElement('h2')
    let ddc2Ol4 = document.createElement('ol')
    let ddc2li7 = document.createElement('li')
    let ddc2li8 = document.createElement('li')
    let ddcDrop2h25 = document.createElement('h2')
    let ddc2Ol5 = document.createElement('ol')
    let ddc2li9 = document.createElement('li')
    let ddcDrop2h26 = document.createElement('h2')
    let ddc2Ol6 = document.createElement('ol')
    let ddc2li10 = document.createElement('li')
    let ddcDrop2h27 = document.createElement('h2')
    let ddc2Ol7 = document.createElement('ol')
    let ddc2li11 = document.createElement('li')
    let ddc2li12 = document.createElement('li')
    let ddcDrop2h28 = document.createElement('h2')
    let ddc2Ol8 = document.createElement('ol')
    let ddc2li13 = document.createElement('li')
    let ddc2li14 = document.createElement('li')

    let ddc2assistance = document.createElement('p')
    
    let ddc3h21 = document.createElement('h2');
    let ddc3Ol1 = document.createElement('ol');
    let ddc3li1 = document.createElement('li');
    let ddc3li2 = document.createElement('li');
    let ddc3h22 = document.createElement('h2');
    let ddc3Ol2 = document.createElement('ol');
    let ddc3li3 = document.createElement('li');
    let ddc3h23 = document.createElement('h2');
    let ddc3Ol3 = document.createElement('ol');
    let ddc3li4 = document.createElement('li');
    let ddc3li5 = document.createElement('li');
    let ddc3h24 = document.createElement('h2');
    let ddc3Ol4 = document.createElement('ol');
    let ddc3li6 = document.createElement('li');
    let ddc3li7 = document.createElement('li');
    let ddc3h25 = document.createElement('h2');
    let ddc3Ol5 = document.createElement('ol');
    let ddc3li8 = document.createElement('li');
    let ddc3li9 = document.createElement('li');
    let ddc3h26 = document.createElement('h2');
    let ddc3Ol6 = document.createElement('ol');
    let ddc3li10 = document.createElement('li');
    let ddc3li11 = document.createElement('li');
    let ddc3h27 = document.createElement('h2');
    let ddc3Ol7 = document.createElement('ol');
    let ddc3li12 = document.createElement('li');
    let ddc3h28 = document.createElement('h2');
    let ddc3Ol8 = document.createElement('ol');
    let ddc3li13 = document.createElement('li');
    let ddc3h29 = document.createElement('h2');
    let ddc3Ol9 = document.createElement('ol');
    let ddc3li14 = document.createElement('li');

    let ddc4p1 = document.createElement('p');
    let ddc4p2 = document.createElement('p');
    let ddc4p3 = document.createElement('p');

    let ddc4Ol = document.createElement('ol');
    let ddc4Li1 = document.createElement('li');
    let ddc4Li2 = document.createElement('li');
    let ddc4Li3 = document.createElement('li');
    let ddc4Li4 = document.createElement('li');
    let ddc4Li5 = document.createElement('li');

    ddcDrop1p1.classList.add('ddcdroptext');
    ddcDrop1p2.classList.add('ddcdroptext');
    ddcDrop1p3.classList.add('ddcdroptext');
    ddcDrop1p4.classList.add('ddcdroptext');
    ddcDrop1p5.classList.add('ddcdroptext');

    ddcDrop2h21.classList.add('ddcdroptext');
    ddcDrop2h22.classList.add('ddcdroptext');
    ddcDrop2h23.classList.add('ddcdroptext');
    ddcDrop2h24.classList.add('ddcdroptext');
    ddcDrop2h25.classList.add('ddcdroptext');
    ddcDrop2h26.classList.add('ddcdroptext');
    ddcDrop2h27.classList.add('ddcdroptext');
    ddcDrop2h28.classList.add('ddcdroptext');

    ddc2Ol1.classList.add('ddcdroptext');
    ddc2Ol2.classList.add('ddcdroptext');
    ddc2Ol3.classList.add('ddcdroptext');
    ddc2Ol4.classList.add('ddcdroptext');
    ddc2Ol5.classList.add('ddcdroptext');
    ddc2Ol6.classList.add('ddcdroptext');
    ddc2Ol7.classList.add('ddcdroptext');
    ddc2Ol8.classList.add('ddcdroptext');

    ddc2li1.classList.add('ddcdroptext');
    ddc2li2.classList.add('ddcdroptext');
    ddc2li3.classList.add('ddcdroptext');
    ddc2li4.classList.add('ddcdroptext');
    ddc2li5.classList.add('ddcdroptext');
    ddc2li6.classList.add('ddcdroptext');
    ddc2li7.classList.add('ddcdroptext');
    ddc2li8.classList.add('ddcdroptext');
    ddc2li9.classList.add('ddcdroptext');
    ddc2li10.classList.add('ddcdroptext');
    ddc2li11.classList.add('ddcdroptext');
    ddc2li12.classList.add('ddcdroptext');
    ddc2li13.classList.add('ddcdroptext');
    ddc2li14.classList.add('ddcdroptext');
    ddc2assistance.classList.add('ddcdroptext');

    ddcDrop1p1.textContent = "Sydney’s public transport network includes trains, light rail, buses and ferries. It’s easy to jump on board with contactless payments available on all forms of transport.";
    ddcDrop1p2.textContent = "If your bank card shows the contactless symbol you can use it to pay for your travel. American Express (AMEX), Mastercard and Visa credit or debit cards are accepted.";
    ddcDrop1p3.textContent = "You can also use an Opal card, a smartcard for public transport. Use it to pay for travel on public transport in Sydney, the Blue Mountains, Central Coast, the Hunter and Illawarra regions.";
    ddcDrop1p4.textContent = "Make sure you tap your debit or credit card or Opal card when you get on and off public transport in Sydney.";
    ddcDrop1p5.textContent = "Buy one over the counter from Opal retailers, including convenience stores and newsagents. Add value before you travel and tap on and off to pay your fare.";

    ddcDrop2h21.textContent = "Understanding Your OSHC Policy";
    ddcDrop2h22.textContent = "Finding a Doctor or Medical Service";
    ddcDrop2h23.textContent = "Billing Process";
    ddcDrop2h24.textContent = "Making a Claim";
    ddcDrop2h25.textContent = "Pharmaceutical Benefits";
    ddcDrop2h26.textContent = "Emergency Services";
    ddcDrop2h27.textContent = "Understanding Exclusions and Waiting Periods";
    ddcDrop2h28.textContent = "Renewing or Changing OSHC";
    ddc2assistance.textContent = "Seek Assistance: Click Here";

    ddc2li1.textContent = "Coverage Details: Familiarise yourself with what your OSHC policy covers. This typically includes visits to the doctor (GP), some hospital treatments, ambulance services, and limited pharmaceuticals.";
    ddc2li2.textContent = "Policy Duration: Your OSHC should cover the entire duration of your student visa.";
    ddc2li3.textContent = "GP Visits: For most medical issues, your first point of contact should be a General Practitioner (GP). You can find a GP who 'direct bills' (see point 3) or one nearest to you.";
    ddc2li4.textContent = "Specialists and Hospitals: If you need specialised treatment, a GP will usually give you a referral to see a specialist or admit you to a hospital.";
    ddc2li5.textContent = "Direct Billing: Some GPs and medical centres have direct billing arrangements with OSHC providers. This means they can bill the insurance company directly, and you may not have to pay upfront.";
    ddc2li6.textContent = "Pay and Claim: If the medical provider does not have a direct billing arrangement, you will need to pay for the service and then claim reimbursement from your OSHC provider.";
    ddc2li7.textContent = "Claim Process: To claim a refund, you will typically need to submit a claim form to your OSHC provider, along with the receipt or invoice from the healthcare provider.";
    ddc2li8.textContent = "Online Claims: Many OSHC providers allow you to submit claims online or through their mobile app, making the process more convenient.";
    ddc2li9.textContent = "Prescription Medication: OSHC usually covers a portion of the cost of prescription medicines. You will pay a co-payment for the medication, and the insurance covers the rest up to a certain amount.";
    ddc2li10.textContent = "Ambulance Cover: In many cases, OSHC policies cover the cost of emergency ambulance services. It's important to check if this is included in your policy.";
    ddc2li11.textContent = "Policy Exclusions: Be aware of what is not covered by your OSHC. This may include certain dental, optical, and physiotherapy services.";
    ddc2li12.textContent = "Waiting Periods: Some treatments may have a waiting period before you can claim the benefits.";
    ddc2li13.textContent = "Policy Renewal: Ensure your OSHC is renewed on time if you extend your stay in Australia.";
    ddc2li14.textContent = "Changing Providers: If you are not satisfied with your current OSHC provider, you have the option to change providers, but you must always maintain continuous health cover.";

    ddc2Ol1.appendChild(ddc2li1);
    ddc2Ol1.appendChild(ddc2li2);

    ddc2Ol2.appendChild(ddc2li3);
    ddc2Ol2.appendChild(ddc2li4);

    ddc2Ol3.appendChild(ddc2li5);
    ddc2Ol3.appendChild(ddc2li6);

    ddc2Ol4.appendChild(ddc2li7);
    ddc2Ol4.appendChild(ddc2li8);

    ddc2Ol5.appendChild(ddc2li9);

    ddc2Ol6.appendChild(ddc2li10);

    ddc2Ol7.appendChild(ddc2li11);
    ddc2Ol7.appendChild(ddc2li12);

    ddc2Ol8.appendChild(ddc2li13);
    ddc2Ol8.appendChild(ddc2li14);

    ddc3h21.textContent = 'Lease Agreement';
    ddc3h22.textContent = 'Condition Report';
    ddc3h23.textContent = 'Repairs and Maintenance';
    ddc3h24.textContent = 'Privacy and Property Access';
    ddc3h25.textContent = 'Rent Increases and Evictions';
    ddc3h26.textContent = 'Ending a Lease';
    ddc3h27.textContent = 'Dispute Resolution';
    ddc3h29.textContent = 'Understanding Local Laws';
    ddc3h28.textContent = 'Support Services';

    ddc3li1.textContent = 'Understanding the Contract: Ensure you fully understand the terms of the lease agreement before signing. This includes rent amount, lease duration, and conditions for renewal or termination.';
    ddc3li2.textContent = "Bond/Security Deposit: Typically, landlords require a bond (security deposit) which is usually equal to four weeks' rent. This should be lodged with the state's fair trading agency, not kept by the landlord.";
    ddc3li3.textContent = 'Property Inspection: Before moving in, conduct a thorough inspection of the property and note any existing damages or issues. This condition report can protect you from being wrongly charged for pre-existing damages when you move out.';
    ddc3li4.textContent = 'Landlord Responsibilities: The landlord is responsible for maintaining the property in a livable condition and for fixing any major problems, such as plumbing or electrical issues.';
    ddc3li5.textContent = 'Requesting Repairs: If repairs are needed, notify your landlord in writing. They are required to respond and address significant issues within a reasonable timeframe.';
    ddc3li6.textContent = 'Notice for Entry: Landlords must provide notice (usually 24 hours) before entering the property, except in emergencies.';
    ddc3li7.textContent = 'Privacy Rights: As a tenant, you have the right to enjoy the property peacefully and without unnecessary intrusions.';
    ddc3li8.textContent = 'Controlled Rent Increases: Rent can only be increased at intervals specified in the lease and with proper notice. Check the local state laws for specific rules.';
    ddc3li9.textContent = 'Eviction Process: Eviction must follow a legal process, including formal notices and appropriate timeframes. A landlord cannot evict a tenant without a valid reason and must follow the legal procedure.';
    ddc3li10.textContent = 'Notice Period: If you intend to leave, you must provide the landlord with the required notice period as mentioned in your lease agreement.';
    ddc3li11.textContent = 'Breaking a Lease: Breaking a lease early can result in penalties. Understand the conditions and potential costs before making such a decision.';
    ddc3li12.textContent = 'Resolving Disputes: If disputes arise with your landlord, try to resolve them amicably. If that fails, each state in Australia has a tribunal service (like the NSW Civil and Administrative Tribunal) for resolving rental disputes.';
    ddc3li13.textContent = 'State-Specific Laws: Tenancy laws can vary by state in Australia. Familiarise yourself with the laws specific to New South Wales (NSW), where Sydney is located.';
    ddc3li14.textContent = 'Tenant Support Services: There are services and organisations that offer advice and support to tenants, such as Tenants’ Advice and Advocacy Services in NSW.';

    ddc3Ol1.appendChild(ddc3li1);
    ddc3Ol1.appendChild(ddc3li2);

    ddc3Ol2.appendChild(ddc3li3);

    ddc3Ol3.appendChild(ddc3li4);
    ddc3Ol3.appendChild(ddc3li5);

    ddc3Ol4.appendChild(ddc3li6);
    ddc3Ol4.appendChild(ddc3li7);

    ddc3Ol5.appendChild(ddc3li8);
    ddc3Ol5.appendChild(ddc3li9);

    ddc3Ol6.appendChild(ddc3li10);
    ddc3Ol6.appendChild(ddc3li11);

    ddc3Ol7.appendChild(ddc3li12);

    ddc3Ol8.appendChild(ddc3li13);

    ddc3Ol9.appendChild(ddc3li14);

    ddc3h21.classList.add('ddcdroptext');
    ddc3Ol1.classList.add('ddcdroptext');
    ddc3li1.classList.add('ddcdroptext');
    ddc3li2.classList.add('ddcdroptext');

    ddc3h22.classList.add('ddcdroptext');
    ddc3Ol2.classList.add('ddcdroptext');
    ddc3li3.classList.add('ddcdroptext');

    ddc3h23.classList.add('ddcdroptext');
    ddc3Ol3.classList.add('ddcdroptext');
    ddc3li4.classList.add('ddcdroptext');
    ddc3li5.classList.add('ddcdroptext');

    ddc3h24.classList.add('ddcdroptext');
    ddc3Ol4.classList.add('ddcdroptext');
    ddc3li6.classList.add('ddcdroptext');
    ddc3li7.classList.add('ddcdroptext');

    ddc3h25.classList.add('ddcdroptext');
    ddc3Ol5.classList.add('ddcdroptext');
    ddc3li8.classList.add('ddcdroptext');
    ddc3li9.classList.add('ddcdroptext');

    ddc3h26.classList.add('ddcdroptext');
    ddc3Ol6.classList.add('ddcdroptext');
    ddc3li10.classList.add('ddcdroptext');
    ddc3li11.classList.add('ddcdroptext');

    ddc3h27.classList.add('ddcdroptext');
    ddc3Ol7.classList.add('ddcdroptext');
    ddc3li12.classList.add('ddcdroptext');

    ddc3h28.classList.add('ddcdroptext');
    ddc3Ol8.classList.add('ddcdroptext');
    ddc3li13.classList.add('ddcdroptext');

    ddc3h29.classList.add('ddcdroptext');
    ddc3Ol9.classList.add('ddcdroptext');
    ddc3li14.classList.add('ddcdroptext');

    ddc4p1.textContent = "One of the perks of working as a student in Australia is that you are allowed to work part-time. This part-time job can be in any field and you have lots of options you can explore (retail, hospitality, health, etc).";
    ddc4p2.textContent = "A good way to start your job search journey is to look out for job openings in popular retail outlets like Woolworths, Coles, BWS, Kmart, and Target. They usually hire many applicants during the Christmas season.";
    ddc4p3.textContent = "If you’re looking into internships or entry-level opportunities, there are a few websites you can start looking into:";

    ddc4Li1.textContent = 'Employability Connect';
    ddc4Li2.textContent = 'GradAustralia';
    ddc4Li3.textContent = 'GradConnection';
    ddc4Li4.textContent = 'ReadyGrad';
    ddc4Li5.textContent = 'Ribit';

    ddc4Ol.appendChild(ddc4Li1);
    ddc4Ol.appendChild(ddc4Li2);
    ddc4Ol.appendChild(ddc4Li3);
    ddc4Ol.appendChild(ddc4Li4);
    ddc4Ol.appendChild(ddc4Li5);

    ddc4p1.classList.add('ddcdroptext')
    ddc4p2.classList.add('ddcdroptext')
    ddc4p3.classList.add('ddcdroptext')
    ddc4Ol.classList.add('ddcdroptext')

    

    
    dd1.addEventListener('click', () => {
        let dropdownArrow = dd1.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            if (dropdown1Expanded === true) {
                ddcDrop.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd1.classList.remove('expanded');

                ddcDrop1p1.style.display = 'none'
                ddcDrop1p2.style.display = 'none'
                ddcDrop1p3.style.display = 'none'
                ddcDrop1p4.style.display = 'none'
                ddcDrop1p5.style.display = 'none'

                const handleAnimation = () => {
                    dd1.removeChild(ddcDrop);
                    ddcDrop.removeEventListener('animationend', handleAnimation);
                }
    
                ddcDrop.addEventListener('animationend', handleAnimation);
                dropdown1Expanded = false;
            } else {
    
                if (ddcDrop.parentNode) {
                    ddcDrop.parentNode.removeChild(ddcDrop);
                }
    
                ddcDrop.style.animation = "dropdownanimate 0.3s forwards";
                dd1.appendChild(ddcDrop);

                setTimeout(() => {
                    ddcDrop1p1.style.display = 'block'
                    ddcDrop1p2.style.display = 'block'
                    ddcDrop1p3.style.display = 'block'
                    ddcDrop1p4.style.display = 'block'
                    ddcDrop1p5.style.display = 'block'

                    ddcDrop.appendChild(ddcDrop1p1);
                    ddcDrop.appendChild(ddcDrop1p2);
                    ddcDrop.appendChild(ddcDrop1p3);
                    ddcDrop.appendChild(ddcDrop1p4);
                    ddcDrop.appendChild(ddcDrop1p5);


                }, 10);
    
                dropdown1Expanded = true;
            }
    })
    
    dd2.addEventListener('click', () => {
        let dropdownArrow = dd2.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            ddcDrop2h21.style.display = "none";
            ddc2Ol1.style.display = "none";
            ddcDrop2h22.style.display = "none";
            ddc2Ol2.style.display = "none";
            ddcDrop2h23.style.display = "none";
            ddc2Ol3.style.display = "none";
            ddcDrop2h24.style.display = "none";
            ddc2Ol4.style.display = "none";
            ddcDrop2h25.style.display = "none";
            ddc2Ol5.style.display = "none";
            ddcDrop2h26.style.display = "none";
            ddc2Ol6.style.display = "none";
            ddcDrop2h27.style.display = "none";
            ddc2Ol7.style.display = "none";
            ddcDrop2h28.style.display = "none";
            ddc2Ol8.style.display = "none";
            ddc2assistance.style.display = "none";
            
            if (dropdown2Expanded === true) {
                ddcDrop2.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd2.classList.remove('expanded');
    
                const handleAnimation = () => {
                    dd2.removeChild(ddcDrop2);
                    ddcDrop2.removeEventListener('animationend', handleAnimation);
                }
    
                ddcDrop2.addEventListener('animationend', handleAnimation);
                dropdown2Expanded = false;
            } else {
                if (ddcDrop2.parentNode) {
                    ddcDrop2.parentNode.removeChild(ddcDrop2);
                }
                ddcDrop2.style.animation = "dropdownanimate 0.3s forwards";
                dd2.appendChild(ddcDrop2);
    
                setTimeout(() => {
                
                    ddcDrop2h21.style.display = "block";
                    ddc2Ol1.style.display = "block";
                    ddcDrop2h22.style.display = "block";
                    ddc2Ol2.style.display = "block";
                    ddcDrop2h23.style.display = "block";
                    ddc2Ol3.style.display = "block";
                    ddcDrop2h24.style.display = "block";
                    ddc2Ol4.style.display = "block";
                    ddcDrop2h25.style.display = "block";
                    ddc2Ol5.style.display = "block";
                    ddcDrop2h26.style.display = "block";
                    ddc2Ol6.style.display = "block";
                    ddcDrop2h27.style.display = "block";
                    ddc2Ol7.style.display = "block";
                    ddcDrop2h28.style.display = "block";
                    ddc2Ol8.style.display = "block";
                    ddc2assistance.style.display = "block";

                    ddcDrop2.appendChild(ddcDrop2h21);
                    ddcDrop2.appendChild(ddc2Ol1);
                    ddcDrop2.appendChild(ddcDrop2h22);
                    ddcDrop2.appendChild(ddc2Ol2);
                    ddcDrop2.appendChild(ddcDrop2h23);
                    ddcDrop2.appendChild(ddc2Ol3);
                    ddcDrop2.appendChild(ddcDrop2h24);
                    ddcDrop2.appendChild(ddc2Ol4);
                    ddcDrop2.appendChild(ddcDrop2h25);
                    ddcDrop2.appendChild(ddc2Ol5);
                    ddcDrop2.appendChild(ddcDrop2h26);
                    ddcDrop2.appendChild(ddc2Ol6);
                    ddcDrop2.appendChild(ddcDrop2h27);
                    ddcDrop2.appendChild(ddc2Ol7);
                    ddcDrop2.appendChild(ddcDrop2h28);
                    ddcDrop2.appendChild(ddc2Ol8);
                    ddcDrop2.appendChild(ddc2assistance);
    
                
            }, 10);
    
                dropdown2Expanded = true;
            }
    })
    
    dd3.addEventListener('click', () => {
        let dropdownArrow = dd3.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            if (dropdown3Expanded === true) {
                ddcDrop3.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd3.classList.remove('expanded');

                ddc3h21.style.display = 'none';
                ddc3Ol1.style.display = 'none';
                ddc3li1.style.display = 'none';
                ddc3li2.style.display = 'none';
                ddc3h22.style.display = 'none';
                ddc3Ol2.style.display = 'none';
                ddc3li3.style.display = 'none';
                ddc3h23.style.display = 'none';
                ddc3Ol3.style.display = 'none';
                ddc3li4.style.display = 'none';
                ddc3li5.style.display = 'none';
                ddc3h24.style.display = 'none';
                ddc3Ol4.style.display = 'none';
                ddc3li6.style.display = 'none';
                ddc3li7.style.display = 'none';
                ddc3h25.style.display = 'none';
                ddc3Ol5.style.display = 'none';
                ddc3li8.style.display = 'none';
                ddc3li9.style.display = 'none';
                ddc3h26.style.display = 'none';
                ddc3Ol6.style.display = 'none';
                ddc3li10.style.display = 'none';
                ddc3li11.style.display = 'none';
                ddc3h27.style.display = 'none';
                ddc3Ol7.style.display = 'none';
                ddc3li12.style.display = 'none';
                ddc3h28.style.display = 'none';
                ddc3Ol8.style.display = 'none';
                ddc3li13.style.display = 'none';
                ddc3h29.style.display = 'none';
                ddc3Ol9.style.display = 'none';
                ddc3li14.style.display = 'none';
    
                const handleAnimation = () => {
                    dd3.removeChild(ddcDrop3);
                    ddcDrop3.removeEventListener('animationend', handleAnimation);
                }
    
                ddcDrop3.addEventListener('animationend', handleAnimation);
                dropdown3Expanded = false;
            } else {
                if (ddcDrop3.parentNode) {
                    ddcDrop3.parentNode.removeChild(ddcDrop3);
                }
                ddcDrop3.style.animation = "dropdownanimate 0.3s forwards";
    
                dd3.appendChild(ddcDrop3);
    
                setTimeout(() => {

                    ddc3h21.style.display = 'block';
                    ddc3Ol1.style.display = 'block';
                    ddc3li1.style.display = 'block';
                    ddc3li2.style.display = 'block';
                    ddc3h22.style.display = 'block';
                    ddc3Ol2.style.display = 'block';
                    ddc3li3.style.display = 'block';
                    ddc3h23.style.display = 'block';
                    ddc3Ol3.style.display = 'block';
                    ddc3li4.style.display = 'block';
                    ddc3li5.style.display = 'block';
                    ddc3h24.style.display = 'block';
                    ddc3Ol4.style.display = 'block';
                    ddc3li6.style.display = 'block';
                    ddc3li7.style.display = 'block';
                    ddc3h25.style.display = 'block';
                    ddc3Ol5.style.display = 'block';
                    ddc3li8.style.display = 'block';
                    ddc3li9.style.display = 'block';
                    ddc3h26.style.display = 'block';
                    ddc3Ol6.style.display = 'block';
                    ddc3li10.style.display = 'block';
                    ddc3li11.style.display = 'block';
                    ddc3h27.style.display = 'block';
                    ddc3Ol7.style.display = 'block';
                    ddc3li12.style.display = 'block';
                    ddc3h28.style.display = 'block';
                    ddc3Ol8.style.display = 'block';
                    ddc3li13.style.display = 'block';
                    ddc3h29.style.display = 'block';
                    ddc3Ol9.style.display = 'block';
                    ddc3li14.style.display = 'block';

                    ddcDrop3.appendChild(ddc3h21);
                    ddcDrop3.appendChild(ddc3Ol1);
                    ddcDrop3.appendChild(ddc3h22);
                    ddcDrop3.appendChild(ddc3Ol2);
                    ddcDrop3.appendChild(ddc3h23);
                    ddcDrop3.appendChild(ddc3Ol3);
                    ddcDrop3.appendChild(ddc3h24);
                    ddcDrop3.appendChild(ddc3Ol4);
                    ddcDrop3.appendChild(ddc3h25);
                    ddcDrop3.appendChild(ddc3Ol5);
                    ddcDrop3.appendChild(ddc3h26);
                    ddcDrop3.appendChild(ddc3Ol6);
                    ddcDrop3.appendChild(ddc3h27);
                    ddcDrop3.appendChild(ddc3Ol7);
                    ddcDrop3.appendChild(ddc3h28);
                    ddcDrop3.appendChild(ddc3Ol8);
                    ddcDrop3.appendChild(ddc3h29);
                    ddcDrop3.appendChild(ddc3Ol9);

                }, 100);
    
                dropdown3Expanded = true;
            }

            
    })

    dd4.addEventListener('click', () => {
        let dropdownArrow = dd4.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            if (dropdown4Expanded === true) {
                ddcDrop4.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd4.classList.remove('expanded');

                ddc4p1.style.display = 'none'
                ddc4p2.style.display = 'none'
                ddc4p3.style.display = 'none'
                ddc4Ol.style.display = 'none'

                const handleAnimation = () => {
                    dd4.removeChild(ddcDrop4);
                    ddcDrop4.removeEventListener('animationend', handleAnimation);
                }
    
                ddcDrop4.addEventListener('animationend', handleAnimation);
                dropdown4Expanded = false;
            } else {
    
                if (ddcDrop4.parentNode) {
                    ddcDrop4.parentNode.removeChild(ddcDrop4);
                }
    
                ddcDrop4.style.animation = "dropdownanimate 0.3s forwards";
                dd4.appendChild(ddcDrop4);

                setTimeout(() => {
                    ddc4p1.style.display = 'block'
                    ddc4p2.style.display = 'block'
                    ddc4p3.style.display = 'block'
                    ddc4Ol.style.display = 'block'

                    ddcDrop4.appendChild(ddc4p1);
                    ddcDrop4.appendChild(ddc4p2);
                    ddcDrop4.appendChild(ddc4p3);
                    ddcDrop4.appendChild(ddc4Ol);


                }, 10);
    
                dropdown4Expanded = true;
            }
    })










})