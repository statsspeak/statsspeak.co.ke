export function extractFormData(form: HTMLFormElement) {
    return new FormData(form);
}

export function objectFromForm(form: HTMLFormElement): Record<string, string | File> {
    const formData = extractFormData(form);
    return Object.fromEntries(formData.entries())
}
