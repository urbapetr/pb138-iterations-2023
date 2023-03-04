<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />

    <xsl:template match="event">
        <xsl:text>{</xsl:text>
            <xsl:text>"id": </xsl:text>
            <xsl:value-of select="@id" />
            <xsl:text>,</xsl:text>
            
            <xsl:text>"eventname": "</xsl:text>
            <xsl:value-of select="eventname" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"date": "</xsl:text>
            <xsl:value-of select="date" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"location": "</xsl:text>
            <xsl:value-of select="location" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"description": "</xsl:text>
            <xsl:value-of select="description" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"atendees": [</xsl:text>
            <xsl:apply-templates select="attendees/attendee" />
            <xsl:text>]</xsl:text>
            
        <xsl:text>}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>

    <xsl:template match="attendee">
        <xsl:text>{</xsl:text>
        
            <xsl:text>"id": </xsl:text>
            <xsl:value-of select="@id" />
            <xsl:text>,</xsl:text>
            
            <xsl:text>"username": "</xsl:text>
            <xsl:value-of select="@username" />
            <xsl:text>"</xsl:text>
            
        <xsl:text>}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>