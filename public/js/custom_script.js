frappe.ui.form.on("Job Apply", {
    refresh:(frm)=>{
        frm.fields_dict.role.$input.on('change', function() {
            clearFields(frm);
            console.log('its working or not');
            let selectedRole = frm.doc.role;  
            prompt({message:"working good"});  
            // Update table fields based on the selected role
            if (selectedRole == 'Developer') {
                frm.set_df_property('details', 'fields', [
                    { fieldname: 'language', fieldtype: 'Select', options: 'Python\nJavaScript\nPHP' },
                    { fieldname: 'framework', fieldtype: 'Data', label: 'Framework' },
                    { fieldname: 'ide', fieldtype: 'Select', options: 'VS Code\nIntelliJ IDEA' }
                    // Add more fields as needed for Developer role
                ]);
            } else if (selectedRole == 'QA') {
                frm.set_df_property('details', 'fields', [
                    { fieldname: 'testing_tools', fieldtype: 'Select', options: 'Selenium\nAppium\nJUnit' },
                    { fieldname: 'bug_tracking_system', fieldtype: 'Select', options: 'Jira\nBugzilla' },
                    { fieldname: 'automation_experience', fieldtype: 'Int', label: 'Automation Experience' }
                    // Add more fields as needed for QA role
                ]);
            } else if (selectedRole =='Graphic Designer') {
                frm.set_df_property('details', 'fields', [
                    { fieldname: 'design_tools', fieldtype: 'Select', options: 'Adobe Photoshop\nAdobe Illustrator\nSketch' },
                    { fieldname: 'design_style', fieldtype: 'Data', label: 'Design Style' },
                    { fieldname: 'color_theory_knowledge', fieldtype: 'Data', label: 'Color Theory Knowledge' }
                    // Add more fields as needed for Graphic Designer role
                ]);
            }
        });
    },
});
