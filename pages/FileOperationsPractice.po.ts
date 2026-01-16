import { Locator, Page } from "@playwright/test";
import path from "path";

export  class FileOperationsPracticePage {

    static async clickDownloadTemplate(page: Page): Promise<void> {
        let downloadTemplateBtn = page.getByRole('button', { name: 'Download Template Excel' }); 
       return await downloadTemplateBtn.click();
    }

    static async clickDownload(page: Page): Promise<void> {
        let downloadTemplateBtn = page.getByRole('button', { name: 'Download' }); 
       return await downloadTemplateBtn.click();
    }

    static async uplaodAnotherFiles(page: Page): Promise<void> {
        let downloadTemplateBtn = page.getByRole('button', { name: 'Upload Another File' }); 
       return await downloadTemplateBtn.click();
    }

    static async uploadFile(page: Page): Promise<void> {
        // let uploadFileBtn = page.getByRole('button', { name: 'Browse Files' }); 
       
    //  return await uploadFileBtn.setInputFiles("C:\\This pc\\Downloads\\template_data");
      let filePath = path.resolve('c:\\Users\\NUGA\\Downloads\\template_data (1).xlsx');
      

      await page.setInputFiles('input[type="file"]', filePath);
    }

    static async scrollDown(page: Page): Promise<void> {
        let uploadFileBtn = page.getByText('Status: Processed'); 
       return await uploadFileBtn.scrollIntoViewIfNeeded();
    }

    static  getTittle(page: Page): Locator {
        let uploadFileBtn = page.getByText('Status: Processed'); 
        return uploadFileBtn;
    }
}