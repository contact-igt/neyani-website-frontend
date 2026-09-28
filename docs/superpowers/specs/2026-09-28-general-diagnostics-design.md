# General Eye Care diagnostics section

## Goal

Add a diagnostic-services and advanced-equipment section immediately after the “Your eye examination: what to expect” journey on the General Eye Care page. The section should use the supplied clinical-technology reference as its visual direction while retaining the Neyani typography, color tokens, and responsive behavior.

## Structure

1. A full-width diagnostic hero image introduces the section.
2. **Diagnostic Services** follows as one large feature card. It auto-advances slowly through seven services, with accessible manual pagination and pause-on-focus/hover behavior. Each slide presents one service with an icon, title, concise clinical description, and the generated clinical image.
3. **Advanced Equipment** follows as a responsive card grid. It contains six equipment entries: Oertli FAROS, ZEISS VISU 160, ZEISS OCT, Lenstar Pro, iCare Tonometer, and Appasamy YAG Laser.

## Visual rules

- Use one generated wide clinical diagnostic image for the section hero.
- Use generated images for the six equipment cards. They must be clean clinical product/editorial photographs, without logos, text, watermarks, or fabricated interface labels.
- Keep surfaces pale blue-white, borders subdued, and accents in the existing primary cyan.
- The diagnostic slider uses one substantial card at a time; it must not resemble the existing small service-card slider.
- The equipment cards are compact, image-led tiles with an item name and one concise supporting line.
- At desktop the equipment cards are displayed in three columns; at tablet two columns; at mobile one column.

## Content

### Diagnostic Services

- Comprehensive Eye Examination
- Vision Testing
- Eye Pressure Testing
- Retina Examination
- OCT
- Optical Biometry
- Color Vision Testing

### Advanced Equipment

- Oertli FAROS
- ZEISS VISU 160
- ZEISS OCT
- Lenstar Pro
- iCare Tonometer
- Appasamy YAG Laser

## Accessibility and behavior

- Generated images have descriptive alt text.
- The slider exposes an accessible label and keeps pause-on-focus and pause-on-hover enabled.
- Motion is disabled under `prefers-reduced-motion`.
- Cards and controls maintain visible keyboard focus states.

## Files and verification

- Add a focused client component for the diagnostic slider under `src/app/services/general/`.
- Add generated image assets under `public/` using new versioned descriptive filenames.
- Update `src/app/services/general/page.tsx` and `general.module.css` only for section integration and layout.
- Verify with `npm run type-check`, `npm run build`, and visual inspection at desktop and mobile widths.
